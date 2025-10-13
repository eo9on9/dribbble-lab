import {
  CATEGORIES,
  type KindOfCategories,
} from '@/source/shared/constants/categories'
import {
  DesignersIcon,
  ServicesIcon,
  ShotsIcon,
} from '@/source/shared/ui/icons'
import { useHeroSearchContext } from '@/source/widgets/main/ui/HeroSearch/useHeroSearchContext'
import { cva } from 'class-variance-authority'
import { type ReactNode } from 'react'

const ICON_MAP: Record<KindOfCategories, ReactNode> = {
  shots: <ShotsIcon name="shots" />,
  designers: <DesignersIcon name="designers" />,
  services: <ServicesIcon name="services" />,
}

export const Category = () => {
  const { category: value, setCategory: setValue } = useHeroSearchContext()

  return (
    <div className={wrapperCn()}>
      {CATEGORIES.map(category => (
        <label key={category.value}>
          <input
            className={inputCn()}
            type="radio"
            name="category"
            value={category.value}
            onChange={e => setValue(e.target.value as KindOfCategories)}
            checked={value === category.value}
          />
          <span className={buttonCn()}>
            <span className={iconCn()}>{ICON_MAP[category.value]}</span>
            <span className={labelCn()}>{category.label}</span>
          </span>
        </label>
      ))}
    </div>
  )
}

const wrapperCn = cva([
  /** layout */
  'flex items-center justify-center tablet:justify-start',
])

const inputCn = cva([
  /** layout */
  'peer hidden',
])

const buttonCn = cva([
  /** layout */
  'inline-flex items-center gap-1.5 h-10 px-[15px] rounded-full',
  /** text */
  'text-[13px] font-semibold text-drb-black',
  /** interaction */
  'cursor-pointer hover:not-peer-checked:bg-drb-gray-30',
  /** checked */
  'peer-checked:text-white peer-checked:bg-drb-gray-800',
])

const iconCn = cva([
  /** layout */
  'w-[18px] h-[18px]',
])

const labelCn = cva([
  /** text */
  // 'text-[13px] font-semibold text-drb-black',
])
