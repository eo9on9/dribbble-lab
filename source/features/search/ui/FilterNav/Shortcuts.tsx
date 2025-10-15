import { ToggleGroup } from '@/source/shared/ui/ToggleGroup'
import type { ToggleGroupOption } from '@/source/shared/ui/ToggleGroup/types'
import { cva } from 'class-variance-authority'

const OPTIONS: ToggleGroupOption[] = [
  { label: 'Discover', value: 'discover' },
  { label: 'Animation', value: 'animation' },
  { label: 'Branding', value: 'branding' },
  { label: 'Illustration', value: 'illustration' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Print', value: 'print' },
  { label: 'Product Design', value: 'product-design' },
  { label: 'Typography', value: 'typography' },
  { label: 'Web Design', value: 'web-design' },
]

export const Shortcuts = () => {
  return (
    <div className={wrapperCn()}>
      <ToggleGroup options={OPTIONS} defaultValue="discover" />
    </div>
  )
}

const wrapperCn = cva([
  'order-3 flex justify-center w-full min-w-0 pt-4 mt-4 border-t border-drb-gray-50 pc:order-2 pc:flex-1 pc:pt-0 pc:mt-0 pc:border-t-0',
])
