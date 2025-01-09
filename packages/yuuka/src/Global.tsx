import { compile, middleware, prefixer, serialize, stringify } from "stylis";
import type { CSS } from "./types";
import { emotionSerialize } from "./utils/emotionSerialize";

export function Global({ children }: { children: CSS }) {
	const emotion = emotionSerialize(children);
	const href = `yuuka-${emotion.name}`;
	const serialized = serialize(
		compile(emotion.styles),
		middleware([prefixer, stringify])
	);

	return (
		<style href={href} precedence="medium">
			{serialized}
		</style>
	);
}
