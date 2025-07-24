import ConfigProvider from '@/lib/config'
import './globals.css'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Yazda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ConfigProvider>
    <html lang="pl">
      <body>{children}</body>
    </html>
  </ConfigProvider>

}
