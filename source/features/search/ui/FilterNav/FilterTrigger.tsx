import { Button } from '@/source/shared/ui/Button'
import { FilterIcon } from '@/source/shared/ui/icons'
import { cva } from 'class-variance-authority'

interface FilterTriggerProps {
  onClick: () => void
}

export const FilterTrigger = ({ onClick }: FilterTriggerProps) => {
  return (
    <div className={wrapperCn()}>
      <Button variant="secondary" size="md" onClick={onClick}>
        <span className={buttonCn()}>
          <span className={iconCn()}>
            <FilterIcon />
          </span>
          <span className={textCn()}>Filter</span>
        </span>
      </Button>
    </div>
  )
}

const wrapperCn = cva(['order-2 pr-4 pc:order-3'])

const buttonCn = cva([
  /** layout */
  'flex items-center gap-1.5',
])

const iconCn = cva([
  /** layout */
  'w-[13px] h-[13px]',
])

const textCn = cva([
  /** text */
  'text-[13px] font-normal',
])
