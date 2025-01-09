import React from "react";
import type { CSS } from "./types";
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
				key: "yuuka-style",
				precedence: "medium"
			},
			style
		)
	];
};
