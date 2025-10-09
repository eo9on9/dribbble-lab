import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
} from '@/source/shared/ui/icons'
import { cva } from 'class-variance-authority'

export const FooterExternalLinks = () => {
  return (
    <div className={wrapperCn()}>
      <a className={linkCn()} href="#" aria-label="Twitter">
        <TwitterIcon />
      </a>
      <a className={linkCn()} href="#" aria-label="Facebook">
        <FacebookIcon />
      </a>
      <a className={linkCn()} href="#" aria-label="Instagram">
        <InstagramIcon />
      </a>
      <a className={linkCn()} href="#" aria-label="Pinterest">
        <PinterestIcon />
      </a>
    </div>
  )
}

const wrapperCn = cva([
  /** layout */
  'flex items-center gap-4',
])

const linkCn = cva([
  /** layout */
  'block w-[18px] h-[18px]',
  /** text */
  'text-drb-black',
  /** interaction */
  'cursor-pointer hover:opacity-70',
])
