import { serializeStyles } from "@emotion/serialize";
import type { CSS } from "../types";

export const emotionSerialize = (
	css: CSS
): { styles: string; name: string } => {
	const emotion = serializeStyles([css]);
	return { styles: emotion.styles.replaceAll("{:", "{&:"), name: emotion.name };
};
