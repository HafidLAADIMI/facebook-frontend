import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../../components/NavBar";
import LeftBar from "../../components/LeftBar";
import RightBar from "../../components/RightBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Facebook",
  description: "Facebook clone with Next js and Spring Boot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-200 overflow-auto h-[100%]">
        {/* <NavBar /> */}
        {children}
      </body>
    </html>
  );
}
