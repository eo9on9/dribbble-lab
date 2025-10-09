import { LogoIcon } from '@/source/shared/ui/icons'
import { cva } from 'class-variance-authority'
import Link from 'next/link'

export const FooterLogo = () => {
  return (
    <Link className={cn()} href="/" aria-label="Go to home">
      <LogoIcon />
    </Link>
  )
}

const cn = cva([
  /** layout */
  'block w-[103px]',
  /** interaction */
  'cursor-pointer hover:opacity-70',
])
