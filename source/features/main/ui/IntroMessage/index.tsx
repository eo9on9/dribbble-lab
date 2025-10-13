import { Description } from '@/source/features/main/ui/IntroMessage/Description'
import { Title } from '@/source/features/main/ui/IntroMessage/Title'
import { cva } from 'class-variance-authority'

export const IntroMessage = () => {
  return (
    <div className={cn()}>
      <Title />
      <Description />
    </div>
  )
}

const cn = cva([
  /** layout */
  'flex flex-col gap-4',
])
