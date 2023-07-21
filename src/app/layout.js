import "./globals.css";
import { Flamenco } from "next/font/google";
import Bottomnav from "@/components/home/bottomnav";

const flamenco = Flamenco({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Burger King",
  description: "Burger King website recreation in NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={flamenco.className}>
        {children}
        <Bottomnav />
      </body>
    </html>
  );
}
