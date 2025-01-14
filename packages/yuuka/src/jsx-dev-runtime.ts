import React from "react";
import ReactJSXRuntimeDev from "react/jsx-dev-runtime";
import type { Props } from "./types";
import { ELEMENT_KEY, STYLE_KEY } from "./utils/constants";
import createProps from "./utils/createProps";

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

	return ReactJSXRuntimeDev.jsxDEV(
		React.Fragment,
		{
			children: [
				ReactJSXRuntimeDev.jsxDEV(
					type,
					props,
					key ?? ELEMENT_KEY,
					isStaticChildren,
					source,
					self
				),
				ReactJSXRuntimeDev.jsxDEV(Style, {}, STYLE_KEY, true, source, self)
			]
		},
		key,
		true,
		source,
		self
	);
}
