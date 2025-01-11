import { serializeStyles } from "@emotion/serialize";
import { compile, middleware, prefixer, serialize, stringify } from "stylis";
import type { CSS } from "../types";
import { compat } from "./compat";

export const createStyle = (
	css: CSS,
	global = false
): [className: string, style: string] => {
	const emotion = serializeStyles([css]);
	const className = `yuuka-${emotion.name}`;
	const serialized = serialize(
		compile(global ? emotion.styles : `.${className}{${emotion.styles}}`),
		middleware([prefixer, compat, stringify])
	);

	return [className, serialized];
};
