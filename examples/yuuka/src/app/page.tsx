import { type CSS, Global, css, keyframes } from "@mimorisuzuko/yuuka";
import Link from "next/link";

const style: CSS = { color: "red" };
const [className, styleElement] = css({ fontWeight: "bold" });
const [animationName, animationStyleElement] = keyframes({
	from: {
		transform: "rotate(0)"
	},
	to: {
		transform: "rotate(360deg)"
	}
});

export default function Home() {
	return (
		<main css={style}>
			Hi
			<textarea css={{ border: "1px solid blue" }} />
			{styleElement}
			<Link className={className} href="/">
				next/link
			</Link>
			<Global>{{ main: { background: "green" } }}</Global>
			{animationStyleElement}
			<div
				css={{
					animation: `1s linear infinite ${animationName}`
				}}
			>
				aaa
			</div>
		</main>
	);
}
