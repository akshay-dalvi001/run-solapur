import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://runsolapur.com"),
  title: {
    default: "Run Solapur | Challenger Sports Foundation",
    template: "%s | Run Solapur",
  },
  description:
    "Official event story for Challenger Sports Foundation, Solapur marathon initiatives, fitness and endurance sports, and the Run for Nation movement.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
