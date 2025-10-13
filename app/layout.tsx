import { DeviceListener } from '@/source/app/providers/DeviceListener'
import { QueryClientProvider } from '@/source/app/providers/QueryClientProvider'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { PropsWithChildren } from 'react'
import './globals.css'

const monaSans = localFont({
  src: [
    {
      path: './fonts/MonaSans-VariableFont.woff2',
      style: 'normal',
    },
    {
      path: './fonts/MonaSans-Italic-VariableFont.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-mona-sans',
})

export const metadata: Metadata = {
  title: 'Dribbble Lab',
  description: 'Dribbble clone project',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${monaSans.className}`}>
        <DeviceListener />
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  )
}
