import { Cormorant_Garamond, JetBrains_Mono, Geist } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
  style: "italic",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function HrisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${cormorant.variable} ${mono.variable} ${geist.variable} font-sans antialiased`}
    >
      {children}
    </div>
  );
}
