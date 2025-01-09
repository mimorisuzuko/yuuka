import { compile, middleware, prefixer, serialize, stringify } from "stylis";
import type { CSS } from "../types";
import { emotionSerialize } from "./emotionSerialize";

export const createStyle = (css: CSS): [className: string, style: string] => {
	const emotion = emotionSerialize(css);
	const className = `yuuka-${emotion.name}`;
	const styles = emotion.styles.startsWith(":")
		? `&${emotion.styles}`
		: emotion.styles;
	const serialized = serialize(
		compile(`.${className}{${styles}}`),
		middleware([prefixer, stringify])
	);

	return [className, serialized];
};
