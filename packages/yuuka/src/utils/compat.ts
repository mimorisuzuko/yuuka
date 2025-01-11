// Copy from https://github.com/emotion-js/emotion/blob/main/packages/cache/src/stylis-plugins.ts
/* eslint-disable */
import {
  alloc,
  dealloc,
  delimit,
  Element,
  from,
  Middleware,
  next,
  peek,
  position,
  slice,
  token
} from 'stylis'

// based on https://github.com/thysultan/stylis.js/blob/e6843c373ebcbbfade25ebcc23f540ed8508da0a/src/Tokenizer.js#L239-L244
const identifierWithPointTracking = (
  begin: number,
  points: number[],
  index: number
) => {
  let previous = 0
  let character = 0

  while (true) {
    previous = character
    character = peek()

    // &\f
    if (previous === 38 && character === 12) {
      points[index] = 1
    }

    if (token(character)) {
      break
    }

    next()
  }

  return slice(begin, position)
}

const toRules = (parsed: string[], points: number[]) => {
  // pretend we've started with a comma
  let index = -1
  let character = 44

  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1
        }
        parsed[index] += identifierWithPointTracking(
          position - 1,
          points,
          index
        )
        break
      case 2:
        parsed[index] += delimit(character)
        break
      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : ''
          points[index] = parsed[index].length
          break
        }
      // fallthrough
      default:
        parsed[index] += from(character)
    }
  } while ((character = next()))

  return parsed
}

const getRules = (value: string, points: number[]) =>
  dealloc(toRules(alloc(value) as string[], points))

// WeakSet would be more appropriate, but only WeakMap is supported in IE11
const fixedElements = /* #__PURE__ */ new WeakMap()

export let compat: Middleware = element => {
  if (
    element.type !== 'rule' ||
    !element.parent ||
    // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1
  ) {
    return
  }

  let value = element.value
  let parent: Element | null = element.parent
  let isImplicitRule =
    element.column === parent.column && element.line === parent.line

  while (parent.type !== 'rule') {
    parent = parent.parent
    if (!parent) return
  }

  // short-circuit for the simplest case
  if (
    element.props.length === 1 &&
    value.charCodeAt(0) !== 58 /* colon */ &&
    !fixedElements.get(parent)
  ) {
    return
  }

  // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"
  if (isImplicitRule) {
    return
  }

  fixedElements.set(element, true)

  const points: number[] = []
  const rules = getRules(value, points)
  const parentRules = parent.props

  for (let i = 0, k = 0; i < rules.length; i++) {
    for (let j = 0; j < parentRules.length; j++, k++) {
      ;(element.props as string[])[k] = points[i]
        ? rules[i].replace(/&\f/g, parentRules[j])
        : `${parentRules[j]} ${rules[i]}`
    }
  }
}
