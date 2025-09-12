import { LogoIcon } from '@/source/shared/ui/icons'
import { cva } from 'class-variance-authority'
import Link from 'next/link'

export const HeaderLogo = () => {
  return (
    <h1 className={logoCn()}>
      <Link href="/" aria-label="Go to home">
        <LogoIcon />
      </Link>
    </h1>
  )
}

const logoCn = cva('w-22')
