import { HeroMessage } from '@/source/widgets/main/ui/HeroMessage'
import { HeroSearch } from '@/source/widgets/main/ui/HeroSearch'
import { HeroVideo } from '@/source/widgets/main/ui/HeroVideo'
import { cva } from 'class-variance-authority'

export const Hero = () => {
  return (
    <div className={wrapperCn()}>
      <div className={leftCn()}>
        <HeroMessage />
        <HeroSearch />
      </div>
      <div className={rightCn()}>
        <HeroVideo />
      </div>
    </div>
  )
}

const wrapperCn = cva([
  /** layout */
  'pc:flex pc:gap-[8vw] pc:items-center',
])

const leftCn = cva([
  /** layout */
  'flex flex-col gap-[42px] pc:flex-1 pc:min-w-0',
])

const rightCn = cva([
  /** layout */
  'hidden pc:inline-flex pc:w-1/2 pc:max-w-[614px] pc:shrink-0',
])
