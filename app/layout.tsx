import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/app/styles/globals.css";
import Header from "./layouts/header";

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight:["500","600","700","800"] 
});


export const metadata: Metadata = {
  title: "Cuaca-Ku",
  description: "Want to know? What's Weather On Your Town?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakarta.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
