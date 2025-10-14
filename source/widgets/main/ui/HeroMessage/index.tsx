import { cva } from 'class-variance-authority'
import { Description } from './Description'
import { Title } from './Title'

export const HeroMessage = () => {
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
