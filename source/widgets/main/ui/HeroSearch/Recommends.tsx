import type { KindOfCategories } from '@/source/shared/constants/categories'
import { useHeroSearchContext } from '@/source/widgets/main/ui/HeroSearch/useHeroSearchContext'
import { cva } from 'class-variance-authority'
import Link from 'next/link'

export const RECOMMENDS_MAP: Record<KindOfCategories, string[]> = {
  shots: ['dashboard', 'landing page', 'e-commerce', 'logo', 'card', 'icons'],
  designers: [
    'app design',
    'landing page',
    'web design',
    'dashboard',
    'logo design',
    'animation',
  ],
  services: [
    'branding',
    'logo design',
    'mobile app',
    'illustration',
    'animation',
  ],
}

export const Recommends = () => {
  const { category } = useHeroSearchContext()

  return (
    <div className={wrapperCn()}>
      <div className={titleCn()}>Popular:</div>
      <ul className={listCn()}>
        {RECOMMENDS_MAP[category].map(item => (
          <li key={item}>
            <Link className={linkCn()} href="#">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const wrapperCn = cva([
  /** layout */
  'flex items-center gap-2 w-full h-8 overflow-x-auto scrollbar-hidden',
])

const titleCn = cva([
  /** text */
  'text-[13px] font-semibold text-drb-black',
])

const listCn = cva([
  /** layout */
  'flex items-center gap-2',
])

const linkCn = cva([
  /** layout */
  'inline-flex items-center h-8 px-4 rounded-full border border-drb-gray-300 whitespace-nowrap',
  /** text */
  'text-[13px] text-drb-black',
  /** interaction */
  'cursor-pointer hover:bg-drb-gray-30',
])
