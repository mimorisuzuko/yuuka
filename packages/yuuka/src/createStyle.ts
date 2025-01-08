import { serializeStyles } from "@emotion/serialize";
import React from "react";
import { compile, middleware, prefixer, serialize, stringify } from "stylis";
import type { CSS } from "./types";

export const css = (
	css: CSS
): [className: string, styleElement: React.ReactElement] => {
	const emotion = serializeStyles([css]);
	const className = `yuuka-${emotion.name}`;
	const serialized = serialize(
		compile(`.${className}{${emotion.styles}}`),
		middleware([prefixer, stringify])
	);

	return [
		className,
		React.createElement(
			"style",
			{
				href: className,
				key: "yuuka-style",
				precedence: "medium"
			},
			serialized
		)
	];
};
