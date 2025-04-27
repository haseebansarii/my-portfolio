import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammad Haseeb | Full-Stack Developer",
  description: "Portfolio of Mohammad Haseeb, a Full-Stack Developer specializing in React, React Native, Next.js, and Node.js",
  keywords: ["Full-Stack Developer", "React", "React Native", "Next.js", "Node.js", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
