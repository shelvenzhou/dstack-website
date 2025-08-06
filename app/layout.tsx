import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'dstack - Confidential AI Platform for Developers',
  description: 'Deploy your AI applications with hardware-guaranteed privacy using TEE technology. No code changes required.',
  keywords: 'confidential AI, TEE, trusted execution environment, AI privacy, secure AI deployment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}