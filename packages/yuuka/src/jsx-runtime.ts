import React from "react";
import ReactJSXRuntime from "react/jsx-runtime";
import createProps from "./createProps";

export type { YuukaJSX as JSX } from "./types";

export const Fragment = ReactJSXRuntime.Fragment;

export function jsx(
	type: React.ElementType,
	_props: Record<string, any>,
	key: string
) {
	const [{ children, ...props }, Style] = createProps(_props);

	return ReactJSXRuntime.jsx(
		type,
		{
			children: React.createElement(React.Fragment, {}, Style, children),
			...props
		},
		key
	);
}

export function jsxs(
	type: React.ElementType,
	_props: Record<string, any>,
	key: string
) {
	const [{ children, ...props }, Style] = createProps(_props);

	return ReactJSXRuntime.jsxs(
		type,
		{
			children: React.createElement(React.Fragment, {}, Style, children),
			...props
		},
		key
	);
}
