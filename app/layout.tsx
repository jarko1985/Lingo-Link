import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Nunito } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ExitModal } from "@/components/modals/exitModal";
import { HeartsModal } from "@/components/modals/heartsModal";
import { PracticeModal } from "@/components/modals/PracticeModal";
const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lingo Link",
  description: "take your learning experience to a total new level",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <Toaster />
          <PracticeModal />
          <ExitModal />
          <HeartsModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
