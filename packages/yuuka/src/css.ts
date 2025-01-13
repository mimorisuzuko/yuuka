import React from "react";
import type { CSS } from "./types";
import { PRECEDENCE, STYLE_KEY } from "./utils/constants";
import { createStyle } from "./utils/createStyle";

export const css = (
	css: CSS
): [className: string, styleElement: React.ReactElement] => {
	const [className, style] = createStyle(css);

	return [
		className,
		React.createElement(
			"style",
			{
				href: className,
				key: STYLE_KEY,
				precedence: PRECEDENCE
			},
			style
		)
	];
};
