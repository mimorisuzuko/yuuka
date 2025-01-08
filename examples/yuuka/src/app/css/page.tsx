import { css } from "@mimorisuzuko/yuuka";
import Link from "next/link";

const [className, styleElement] = css({
	fontWeight: "bold",
	background:
		"linear-gradient(to right, rgb(230, 0, 0), rgb(243, 152, 0), rgb(255, 241, 0), rgb(0, 153, 68), rgb(0, 104, 183), rgb(29, 32, 136), rgb(146, 7, 131)) 0 / 100%",
	padding: 16,
	color: "white"
});

export default function Page() {
	return (
		<main css={{ margin: 24 }}>
			{styleElement}
			<Link
				className={className}
				href="https://www.youtube.com/watch?v=a_stK_fFXQI"
			>
				先生、ちょっとお時間いただけますか？
			</Link>
		</main>
	);
}
