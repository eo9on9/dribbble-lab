import { cva } from 'class-variance-authority'
import Link from 'next/link'

export const FooterDirectories = () => {
  return (
    <div className={wrapperCn()}>
      <Link href="#">Jobs</Link>
      <Link href="#">Designers</Link>
      <Link href="#">Freelancers</Link>
      <Link href="#">Tags</Link>
      <Link href="#">Places</Link>
      <Link href="#">Resources</Link>
    </div>
  )
}

const wrapperCn = cva([
  /** layout */
  'flex items-center gap-4',
  /** text */
  'text-sm text-drb-gray-750',
])
