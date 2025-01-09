export default function Page() {
	return (
		<main
			css={{
				input: {
					":focus": {
						background: "red"
					}
				}
			}}
		>
			<input defaultValue="" type="text" />
			<input defaultValue="" type="text" />
		</main>
	);
}
