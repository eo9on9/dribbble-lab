import { cva } from 'class-variance-authority'

export const Divider = () => <div className={cn()} />

const cn = cva([
  /** layout */
  'h-px w-full my-4 bg-drb-gray-500',
])
