import { DeviceListener } from '@/source/app/providers/DeviceListener'
import { QueryClientProvider } from '@/source/app/providers/QueryClientProvider'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { PropsWithChildren } from 'react'
import './globals.css'

const monaSans = localFont({
  src: [
    {
      path: './fonts/MonaSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/MonaSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/MonaSans-Bold.woff2',
      weight: '700',
      style: 'normal',
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
