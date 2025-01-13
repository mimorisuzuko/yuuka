import type { CSS } from "./types";
import { PRECEDENCE } from "./utils/constants";
import { createStyle } from "./utils/createStyle";

export function Global({ children }: { children: CSS }) {
	const [href, style] = createStyle(children, true);

	return (
		<style href={href} precedence={PRECEDENCE}>
			{style}
		</style>
	);
}
