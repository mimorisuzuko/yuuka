import { serializeStyles } from "@emotion/serialize";
import { type FC, createElement } from "react";
import { compile, middleware, prefixer, serialize, stringify } from "stylis";
import type { CSS } from "./types";
import { compat } from "./utils/compat";
import { PRECEDENCE } from "./utils/constants";

export const keyframes = (css: CSS): [animationName: string, Style: FC] => {
	const emotion = serializeStyles([css]);
	const animation = `yuuka-animation-${emotion.name}`;
	const serialized = serialize(
		compile(`@keyframes ${animation}{${emotion.styles}}`),
		middleware([prefixer, compat, stringify])
	);

	return [
		animation,
		function Style() {
			return createElement(
				"style",
				{
					href: animation,
					precedence: PRECEDENCE
				},
				serialized
			);
		}
	];
};
