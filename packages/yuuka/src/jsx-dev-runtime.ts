import React from "react";
import ReactJSXRuntimeDev from "react/jsx-dev-runtime";
import createProps from "./createProps";
import type { Props } from "./types";

export const Fragment = ReactJSXRuntimeDev.Fragment;

export function jsxDEV(
	type: React.ElementType,
	_props: Props,
	key: string,
	isStaticChildren: boolean,
	source: ReactJSXRuntimeDev.JSXSource,
	self: any
): React.JSX.Element {
	const [props, Style] = createProps(_props);

	if (Style === null) {
		return ReactJSXRuntimeDev.jsxDEV(
			type,
			props,
			key,
			isStaticChildren,
			source,
			self
		);
	}

	if (props.key === undefined) {
		props.key = "yuuka-element";
	}

	return ReactJSXRuntimeDev.jsxDEV(
		React.Fragment,
		{
			children: [React.createElement(type, props), Style]
		},
		key,
		isStaticChildren,
		source,
		self
	);
}
