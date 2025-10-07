import { cva } from 'class-variance-authority'

export const ProBadge = () => {
  return <span className={cn()}>Pro</span>
}

const cn = cva([
  /** layout */
  'inline-block px-2 py-1 bg-drb-black rounded-sm',
  /** text */
  'text-[10px] font-semibold text-white',
])
