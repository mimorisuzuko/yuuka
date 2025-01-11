import { serializeStyles } from "@emotion/serialize";
import React from "react";
import { compile, middleware, prefixer, serialize, stringify } from "stylis";
import type { CSS } from "./types";
import { compat } from "./utils/compat";

export const keyframes = (
	css: CSS
): [animationName: string, styleElement: React.ReactElement] => {
	const emotion = serializeStyles([css]);
	const animation = `yuuka-animation-${emotion.name}`;
	const serialized = serialize(
		compile(`@keyframes ${animation}{${emotion.styles}}`),
		middleware([prefixer, compat, stringify])
	);

	return [
		animation,
		React.createElement(
			"style",
			{
				href: animation,
				key: "yuuka-animation",
				precedence: "medium"
			},
			serialized
		)
	];
};
