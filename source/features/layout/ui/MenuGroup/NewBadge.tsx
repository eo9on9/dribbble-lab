import { cva } from 'class-variance-authority'

export const NewBadge = () => {
  return <span className={cn()}>New</span>
}

const cn = cva([
  /** layout */
  'inline-block px-2 py-1 bg-drb-pink-400 rounded-full',
  /** text */
  'text-[10px] font-semibold text-white',
])
