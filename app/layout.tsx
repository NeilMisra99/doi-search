import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DOI Search Tool",
  description:
    "A DOI Search Tool giving you quick access to research articles' abstracts by utilizing OpenAlex API.",
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
