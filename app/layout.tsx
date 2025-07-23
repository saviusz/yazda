import './globals.css'
import { Metadata } from "next"

export const metadata : Metadata = {
  title: 'Yazda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
