import React from "react";
import ReactJSXRuntime from "react/jsx-runtime";
import createProps from "./createProps";

export type { YuukaJSX as JSX } from "./types";

// export const Fragment = ReactJSXRuntime.Fragment;

export function jsx(
	type: React.ElementType,
	_props: Record<string, any>,
	key: string
) {
	const [props, Style] = createProps(_props);

	if (Style === null) {
		return ReactJSXRuntime.jsx(type, props, key);
	}

	if (props.key === undefined) {
		props.key = "yuuka-element";
	}

	return ReactJSXRuntime.jsx(
		React.Fragment,
		{
			children: [React.createElement(type, props), Style]
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
		return ReactJSXRuntime.jsx(type, props, key);
	}

	if (props.key === undefined) {
		props.key = "yuuka-element";
	}

	return ReactJSXRuntime.jsxs(
		React.Fragment,
		{
			children: [React.createElement(type, props), Style]
		},
		key
	);
}
