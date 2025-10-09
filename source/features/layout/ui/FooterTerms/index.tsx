import { cva } from 'class-variance-authority'
import Link from 'next/link'

export const FooterTerms = () => {
  return (
    <div className={wrapperCn()}>
      <span>© 2025 Dribbble</span>
      <Link href="#">Terms</Link>
      <Link href="#">Privacy</Link>
      <Link href="#">Cookies</Link>
    </div>
  )
}

const wrapperCn = cva([
  /** layout */
  'flex items-center gap-4',
  /** text */
  'text-sm text-drb-gray-750',
])
