import { FooterExternalLinks } from '@/source/features/layout/ui/FooterExternalLinks'
import { FooterInternalLinks } from '@/source/features/layout/ui/FooterInternalLinks'
import { FooterLogo } from '@/source/features/layout/ui/FooterLogo'
import { cva } from 'class-variance-authority'

export const UpperSection = () => {
  return (
    <div className={cn()}>
      <FooterLogo />
      <FooterInternalLinks />
      <FooterExternalLinks />
    </div>
  )
}

const cn = cva([
  /** layout */
  'flex flex-col items-center justify-center gap-5 py-11 px-8 [@media(min-width:940px)]:flex-row [@media(min-width:940px)]:justify-between [@media(min-width:940px)]:pt-[72px]',
])
