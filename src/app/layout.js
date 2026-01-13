import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { AuthProvider } from "@/context/AuthProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "⚡CodeCollab",
  description: "New generated code editor with AI-powered suggestions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Provider>
          {children}
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
