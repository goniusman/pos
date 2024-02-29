import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/header";
import HeaderMobile from "@/components/header-mobile";
import MarginWidthWrapper from "@/components/margin-width-wrapper";
import PageWrapper from "@/components/page-wrapper";
import SideNav from "@/components/side-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store Mate",
  description: "A simple store management app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={`bg-white${inter.className}`}>
      <div className="flex">
        <SideNav />
        <div className="flex-1">
          <MarginWidthWrapper>
            <Header />
            <HeaderMobile />
            <PageWrapper>{children}</PageWrapper>
          </MarginWidthWrapper>
        </div>
      </div>
    </section>
  );
}
