import { FormField } from '@/source/shared/ui/FormField'
import { ColorsIcon, FilterSearchIcon } from '@/source/shared/ui/icons'
import { Input } from '@/source/shared/ui/Input'
import { Select, type SelectOption } from '@/source/shared/ui/Select'
import { cva } from 'class-variance-authority'
import { useRef, useState } from 'react'

const TIMEFRAME_OPTIONS: SelectOption[] = [
  { value: 'now', label: 'Now' },
  { value: 'week', label: 'This Past Week' },
  { value: 'month', label: 'This Past Month' },
  { value: 'year', label: 'This Past Year' },
  { value: 'all', label: 'All Time' },
]

interface FilterContentProps {
  isOpen: boolean
}

export const FilterContent = ({ isOpen }: FilterContentProps) => {
  const [tags, setTags] = useState('')
  const [color, setColor] = useState('')

  const ref = useRef<HTMLDivElement>(null)

  const maxHeight = isOpen ? ref.current?.scrollHeight : 0

  return (
    <div className={wrapperCn()} ref={ref} style={{ maxHeight }}>
      <div className={innerCn()}>
        <div className={itemCn()}>
          <FormField>
            <FormField.Head>
              <FormField.Label>Tags</FormField.Label>
              <FormField.Clear visible={!!tags} onClick={() => setTags('')} />
            </FormField.Head>
            <FormField.Body>
              <Input
                icon={<FilterSearchIcon className="text-drb-gray-600" />}
                size="lg"
                value={tags}
                onChange={e => setTags(e.target.value)}
              />
            </FormField.Body>
          </FormField>
        </div>

        <div className={itemCn()}>
          <FormField>
            <FormField.Head>
              <FormField.Label>Color</FormField.Label>
              <FormField.Clear visible={!!color} onClick={() => setColor('')} />
            </FormField.Head>
            <FormField.Body>
              <Input
                icon={<ColorsIcon />}
                prefix="#"
                size="lg"
                maxLength={6}
                value={color}
                onChange={e => setColor(e.target.value)}
              />
            </FormField.Body>
          </FormField>
        </div>

        <div className={itemCn()}>
          <FormField>
            <FormField.Head>
              <FormField.Label>Timeframe</FormField.Label>
            </FormField.Head>
            <FormField.Body>
              <Select
                options={TIMEFRAME_OPTIONS}
                defaultValue="now"
                size="lg"
                fullWidth
              />
            </FormField.Body>
          </FormField>
        </div>
      </div>
    </div>
  )
}

const wrapperCn = cva([
  /** layout */
  'overflow-hidden bg-white ',
  /** animation */
  'transition-[max-height] duration-200 ease-in-out',
])

const innerCn = cva([
  /** layout */
  'flex flex-col gap-5 p-4 pt-8 pc:flex-row pc:gap-8',
])

const itemCn = cva([
  /** layout */
  'w-full',
])
