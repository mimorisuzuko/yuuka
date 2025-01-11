import { compile, middleware, serialize, stringify } from "stylis";
import type { CSS } from "../types";
import { emotionSerialize } from "./emotionSerialize";
import { prefixer } from "./prefixer";

export const createStyle = (
	css: CSS,
	global = false
): [className: string, style: string] => {
	const emotion = emotionSerialize(css);
	const className = `yuuka-${emotion.name}`;
	const serialized = serialize(
		compile(global ? emotion.styles : `.${className}{${emotion.styles}}`),
		middleware([prefixer, stringify])
	);

	return [className, serialized];
};
