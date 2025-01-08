import Link from "next/link";

export default function Page() {
	return (
		<main>
			<h1>Examples</h1>
			<ul>
				<li>
					<Link href="/css">css function</Link>
				</li>
				<li>
					<Link href="/css-prop">css prop</Link>
				</li>
				<li>
					<Link href="/global">{"<Global>"}</Link>
				</li>
				<li>
					<Link href="/keyframes">keyframes</Link>
				</li>
			</ul>
		</main>
	);
}
