import type { CSS } from "@mimorisuzuko/yuuka";

const style: CSS = { color: "red" };

export default function Home() {
	return (
		<main css={style}>
			Hi
			<textarea css={{ border: "1px solid blue" }} />
		</main>
	);
}
