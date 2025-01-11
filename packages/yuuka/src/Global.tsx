import type { CSS } from "./types";
import { createStyle } from "./utils/createStyle";

export function Global({ children }: { children: CSS }) {
	const [href, style] = createStyle(children, true);

	return (
		<style href={href} precedence="medium">
			{style}
		</style>
	);
}
