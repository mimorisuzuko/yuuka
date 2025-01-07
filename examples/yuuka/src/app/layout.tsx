import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "yuuka | Example",
	description: "Example for yuuka"
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ja">
			<body>{children}</body>
		</html>
	);
}
