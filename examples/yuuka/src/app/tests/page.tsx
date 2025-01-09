import type { ReactNode } from "react";

type Props = { children: ReactNode };

function Main({ children }: Props) {
	return (
		<main
			css={{
				":focus-within": {
					background: "red"
				}
			}}
		>
			{children}
			<>
				<input defaultValue="" type="text" />
				<input defaultValue="" type="text" />
			</>
		</main>
	);
}

export default function Page() {
	return (
		<Main>
			<input defaultValue="" type="text" />
			<input defaultValue="" type="text" />
		</Main>
	);
}
