import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "dstack - Open-Source Confidential Computing Platform",
	description:
		"Open-source platform for confidential AI, confidential computing, and TEE-powered private cloud compute. Deploy secure applications with hardware-guaranteed privacy.",
	keywords:
		"confidential AI, confidential computing, TEE, trusted execution environment, private cloud compute, open source, secure computing, privacy-preserving AI, Intel TDX",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
