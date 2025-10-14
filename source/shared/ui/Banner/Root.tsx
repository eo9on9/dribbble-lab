import { cva } from 'class-variance-authority'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'

interface RootProps {
  href?: string
}

export const Root = ({
  href = '#',
  children,
}: PropsWithChildren<RootProps>) => {
  return (
    <Link href={href} className={wrapperCn()}>
      {children}
    </Link>
  )
}

const wrapperCn = cva([
  /** layout */
  'flex flex-col items-start gap-3 w-full p-6 rounded-2xl bg-[#f8f8fc] tablet:flex-row tablet:items-center tablet:gap-7 tablet:p-3',
])
