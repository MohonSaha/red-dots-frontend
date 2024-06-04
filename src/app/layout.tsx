import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Providers from "@/lib/Providers/Providers";
import { Toaster } from "sonner";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Red Dots",
  description:
    "Red Dots is an automated blood service that connects blood searchers with voluntary blood donors in a moment through SMS and website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <Head>
          <link
            rel="icon"
            href="/icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
        </Head>
        <body>
          <AppRouterCacheProvider>
            <Toaster position="top-center" />
            <>{children}</>
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
