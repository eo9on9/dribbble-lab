import { LinkText } from '@/source/shared/ui/LinkText'
import { cva } from 'class-variance-authority'
import Link from 'next/link'

export const FooterInternalLinks = () => {
  return (
    <div className={wrapperCn()}>
      <LinkText as={Link} href="#">
        For designers
      </LinkText>
      <LinkText as={Link} href="#">
        Hire talent
      </LinkText>
      <LinkText as={Link} href="#">
        Inspiration
      </LinkText>
      <LinkText as={Link} href="#">
        Advertising
      </LinkText>
      <LinkText as={Link} href="#">
        Blog
      </LinkText>
      <LinkText as={Link} href="#">
        About
      </LinkText>
      <LinkText as={Link} href="#">
        Careers
      </LinkText>
      <LinkText as={Link} href="#">
        Support
      </LinkText>
    </div>
  )
}

const wrapperCn = cva([
  /** layout */
  'flex justify-center flex-wrap gap-x-4 gap-y-3 tablet:flex-nowrap pc:gap-x-12',
])
