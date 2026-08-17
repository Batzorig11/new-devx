import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-mono",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const forwardedHost = requestHeaders
    .get("x-forwarded-host")
    ?.split(",")[0]
    .trim();
  const host = forwardedHost || requestHeaders.get("host") || "localhost:3000";
  const forwardedProtocol = requestHeaders
    .get("x-forwarded-proto")
    ?.split(",")[0]
    .trim();
  const protocol =
    forwardedProtocol || (host.startsWith("localhost") ? "http" : "https");
  let metadataBase: URL;

  try {
    metadataBase = new URL(`${protocol}://${host}`);
  } catch {
    metadataBase = new URL("http://localhost:3000");
  }

  const title = "AI-Native Frontend Engineering";
  const description =
    "48 хичээл, 12 долоо хоног, 144 цагийн AI-native frontend инженерчлэлийн Монгол курс.";
  const socialImage = new URL("/og.png", metadataBase).toString();

  return {
    metadataBase,
    title,
    description,
    keywords: [
      "frontend",
      "AI",
      "JavaScript",
      "React",
      "Next.js",
      "Монгол курс",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "mn_MN",
      images: [{ url: socialImage, width: 1731, height: 909, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="mn"
      className={`${notoSans.variable} ${notoSansMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
