import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "rendxai - AI-Powered 3D Rendering & Architectural Visualization",
  description: "Experience the future of architectural visualization with rendxai. We combine cutting-edge 3D rendering technology with artificial intelligence to bring your architectural visions to life.",
  keywords: "3D rendering, AI visualization, architectural design, render services, AI architecture",
  authors: [{ name: "rendxai" }],
  openGraph: {
    title: "rendxai - AI-Powered 3D Rendering",
    description: "Transform your architectural vision with AI-powered 3D rendering",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
