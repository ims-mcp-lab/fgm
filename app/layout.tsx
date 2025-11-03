import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "라이브 상품 등록",
  description: "라이브 커머스 상품 등록 인터페이스"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
