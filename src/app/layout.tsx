"use client";
import { isLoggedIn } from "@/services/auth.service";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Store Mate",
//   description: "A simple store management app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const userLoggedIn = isLoggedIn();

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
  }, [userLoggedIn, router]);

  return (
    <html lang="en">
      <body className={`bg-white${inter.className}`}>{children}</body>
    </html>
  );
}
