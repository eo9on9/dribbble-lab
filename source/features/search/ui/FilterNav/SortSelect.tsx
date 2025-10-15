import { Select, type SelectOption } from '@/source/shared/ui/Select'
import { cva } from 'class-variance-authority'

const OPTIONS: SelectOption[] = [
  { label: 'Popular', value: 'popular' },
  { label: 'New & Noteworthy', value: 'new' },
]

export const SortSelect = () => {
  return (
    <div className={wrapperCn()}>
      <Select options={OPTIONS} defaultValue="popular" />
    </div>
  )
}

const wrapperCn = cva([
  /** layout */
  'order-1 pl-4',
])
