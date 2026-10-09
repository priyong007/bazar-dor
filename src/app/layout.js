import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

const notoSerifbangla = Noto_Serif_Bengali({
  variable: "--font-geist-sans",
  subsets: ["latin", "bengali"],
});

export const metadata = {
  title: "Bazar Dor",
  description: "Bazar Dor app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${notoSerifbangla.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        <Marquee/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
