import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/app/providers";
import { ReactNode } from "react";
import { fonts } from "@/app/fonts";

export const metadata: Metadata = {
  title: "DOM_33",
  description: "Geroev Krut 33 official web-site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ua" className={fonts.rubik.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
