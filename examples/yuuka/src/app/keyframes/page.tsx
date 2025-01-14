import { keyframes } from "@mimorisuzuko/yuuka";

const [animationName, Style] = keyframes({
	from: {
		transform: "rotate(0)"
	},
	to: {
		transform: "rotate(360deg)"
	}
});

export default function Page() {
	return (
		<main
			css={{
				margin: 24,
				padding: "240px 80px",
				display: "grid",
				placeItems: "center",
				border: "1px solid black"
			}}
		>
			<Style />
			<div
				css={{
					animation: `1.5s linear infinite ${animationName}`,
					fontSize: "150%",
					fontWeight: "bold"
				}}
			>
				悲しみも怒りも、全て因数分解してやるわ！
			</div>
		</main>
	);
}
