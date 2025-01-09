import { serializeStyles } from "@emotion/serialize";
import type { CSS } from "../types";

export const emotionSerialize = (
	css: CSS
): { styles: string; name: string } => {
	const emotion = serializeStyles([css]);
	return {
		styles: emotion.styles
			.replaceAll("{:", "{&:") // input{:focus{...}} -> input{&:focus{...}}
			.replaceAll(";:", ";&:"), // input{background:red;:focus{...}} -> input{background:red;&:focus{...}}
		name: emotion.name
	};
};
