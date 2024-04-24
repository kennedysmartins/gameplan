import type { Metadata } from "next"
import { ThemeProvider } from "@/contexts/ThemeProvider"
import "./globals.css"
import Navigation from "@/components/Navigation"

export const metadata: Metadata = {
  title: "GamePlan",
  description: "Um app para gerenciar seus jogos de tabuleiro",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
      {/* <Navigation /> */}

          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
