import { FooterDirectories } from '@/source/features/layout/ui/FooterDirectories'
import { FooterTerms } from '@/source/features/layout/ui/FooterTerms'
import { cva } from 'class-variance-authority'

export const LowerSection = () => {
  return (
    <div className={cn()}>
      <FooterTerms />
      <FooterDirectories />
    </div>
  )
}

const cn = cva([
  /** layout */
  'flex flex-col items-center justify-center gap-2 py-11 px-8 [@media(min-width:940px)]:flex-row [@media(min-width:940px)]:justify-between [@media(min-width:940px)]:pt-[72px]',
])
