import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {  
  title: {    
    default: "Mario Hyuuga Reza Angga Pratama | Portofolio",    
    template: "%s | Mario Hyuuga Reza Angga Pratama",  
  },
    
  description: "Portofolio Mario Hyuuga Reza Angga Pratama, siswa SMK calon Junior Web Developer di Kelas Industri UBIG.", };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
