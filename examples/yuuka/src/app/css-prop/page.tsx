import type { CSS } from "@mimorisuzuko/yuuka";

const style: CSS = {
	margin: 24,
	boxShadow:
		"0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)",
	backgroundColor: "white",
	borderRadius: 4,
	padding: 16,
	display: "grid",
	placeItems: "center",
	div: {
		fontSize: "400%",
		fontWeight: "bold"
	}
} as const;

export default function Page() {
	return (
		<main css={style}>
			<div>計算通り、完璧〜♪</div>
		</main>
	);
}
