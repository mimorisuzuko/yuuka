import React from "react";
import ReactJSXRuntimeDev from "react/jsx-dev-runtime";
import createProps from "./createProps";
import type { Props } from "./types";

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
					key,
					isStaticChildren,
					source,
					self
				),
				Style
			]
		},
		key,
		isStaticChildren,
		source,
		self
	);
}
