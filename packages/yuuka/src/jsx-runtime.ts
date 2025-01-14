import React from "react";
import ReactJSXRuntime from "react/jsx-runtime";
import { ELEMENT_KEY, STYLE_KEY } from "./utils/constants";
import createProps from "./utils/createProps";

export type { YuukaJSX as JSX } from "./types";

export const Fragment = ReactJSXRuntime.Fragment;

export function jsx(
	type: React.ElementType,
	_props: Record<string, any>,
	key: string
) {
	const [props, Style] = createProps(_props);

	if (Style === null) {
		return ReactJSXRuntime.jsx(type, props, key);
	}

	return ReactJSXRuntime.jsx(
		React.Fragment,
		{
			children: [
				ReactJSXRuntime.jsx(type, props, key ?? ELEMENT_KEY),
				ReactJSXRuntime.jsx(Style, {}, STYLE_KEY)
			]
		},
		key
	);
}

export function jsxs(
	type: React.ElementType,
	_props: Record<string, any>,
	key: string
) {
	const [props, Style] = createProps(_props);

	if (Style === null) {
		return ReactJSXRuntime.jsxs(type, props, key);
	}

	return ReactJSXRuntime.jsxs(
		React.Fragment,
		{
			children: [
				ReactJSXRuntime.jsxs(type, props, key ?? ELEMENT_KEY),
				ReactJSXRuntime.jsxs(Style, {}, STYLE_KEY)
			]
		},
		key
	);
}
