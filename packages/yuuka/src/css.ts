import { type FC, createElement } from "react";
import type { CSS } from "./types";
import { PRECEDENCE } from "./utils/constants";
import { createStyle } from "./utils/createStyle";

export const css = (css: CSS): [className: string, Style: FC] => {
	const [className, style] = createStyle(css);

	return [
		className,
		function Style() {
			return createElement(
				"style",
				{
					href: className,
					precedence: PRECEDENCE
				},
				style
			);
		}
	];
};
