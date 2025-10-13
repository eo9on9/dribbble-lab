import { cva } from 'class-variance-authority'

export const Description = () => {
  return (
    <p className={cn()}>
      Explore work from the most talented and accomplished designers ready to
      take on your next project.
    </p>
  )
}

const cn = cva([
  /** layout */
  'max-w-[420px] mx-auto tablet:mx-0',
  /** text */
  'leading-[1.3125] text-center text-drb-black tablet:text-left',
])
