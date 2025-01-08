import { Global } from "@mimorisuzuko/yuuka";

export default function Page() {
	return (
		<main>
			<Global>
				{{
					main: {
						display: "flex",
						gap: 8
					},
					button: {
						padding: "8px 16px",
						borderRadius: 4,
						background: "rgb(155, 139, 185)",
						border: "2px solid rgb(80, 79, 135)",
						color: "white"
					}
				}}
			</Global>
			<button type="button">早瀬ユウカ</button>
			<button type="button">ミレニアムサイエンススクール</button>
			<button type="button">セミナー</button>
		</main>
	);
}
