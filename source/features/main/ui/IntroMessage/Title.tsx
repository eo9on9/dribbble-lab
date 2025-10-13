import { cva } from 'class-variance-authority'

export const Title = () => {
  return (
    <h2 className={cn()}>
      Discover the <br /> World’s Top Designers
    </h2>
  )
}

const cn = cva([
  /** text */
  'leading-[1.08] text-[32px] text-center font-semibold font-stretch-expanded text-drb-black tablet:text-5xl tablet:text-left',
])
