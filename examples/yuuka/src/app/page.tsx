import { type CSS, css } from "@mimorisuzuko/yuuka";
import Link from "next/link";

const style: CSS = { color: "red" };
const [className, styleElement] = css({ fontWeight: "bold" });

export default function Home() {
	return (
		<main css={style}>
			Hi
			<textarea css={{ border: "1px solid blue" }} />
			{styleElement}
			<Link className={className} href="/">
				next/link
			</Link>
		</main>
	);
}
