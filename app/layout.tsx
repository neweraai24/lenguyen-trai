import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "vietnamese"],
  weight: ["500"],
  display: "swap",
});

const SITE = "https://lenguyentrai.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "Lê Nguyễn Trãi", template: "%s · Lê Nguyễn Trãi" },
  description: "Lê Nguyễn Trãi – Tư duy dòng tiền & Kiến tạo cộng đồng giàu có toàn diện.",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Lê Nguyễn Trãi",
    title: "Lê Nguyễn Trãi",
    description: "Tư duy dòng tiền & Kiến tạo cộng đồng giàu có toàn diện.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1F3A",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${beVietnam.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body>
        <a className="sr" href="#main">Bỏ qua điều hướng</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
