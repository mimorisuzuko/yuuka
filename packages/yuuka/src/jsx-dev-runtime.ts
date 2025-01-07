import React from "react";
import ReactJSXRuntimeDev from "react/jsx-dev-runtime";
import createProps from "./createProps";

export const Fragment = ReactJSXRuntimeDev.Fragment;

export function jsxDEV(
	type: React.ElementType,
	_props: Record<string, any>,
	key: string,
	isStaticChildren: boolean,
	source: ReactJSXRuntimeDev.JSXSource,
	self: any
): React.JSX.Element {
	const [{ children, ...props }, Style] = createProps(_props);

	return ReactJSXRuntimeDev.jsxDEV(
		type,
		{
			children: React.createElement(React.Fragment, {}, Style, children),
			...props
		},
		key,
		isStaticChildren,
		source,
		self
	);
}
