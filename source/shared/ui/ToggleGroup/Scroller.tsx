import { ScrollArrowIcon } from '@/source/shared/ui/icons'
import { cva } from 'class-variance-authority'
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PropsWithChildren,
} from 'react'

type Pagination = 'prev' | 'next' | 'both' | 'none'

export const Scroller = ({ children }: PropsWithChildren) => {
  const [pagination, setPagination] = useState<Pagination>('none')

  const ref = useRef<HTMLDivElement>(null)

  const scrollTo = useCallback((to: 'prev' | 'next') => {
    const el = ref.current

    const direction = to === 'prev' ? -1 : 1

    if (el) el.scrollTo({ left: el.scrollLeft + direction * el.clientWidth })
  }, [])

  const checkPagination = useCallback(() => {
    const el = ref.current

    if (!el) return setPagination('none')

    if (el.scrollWidth <= el.clientWidth) return setPagination('none')

    const isPrevVisible = el.scrollLeft > 0
    const isNextVisible =
      Math.ceil(el.scrollLeft) + el.clientWidth < el.scrollWidth

    if (isPrevVisible && isNextVisible) return setPagination('both')

    if (isPrevVisible) return setPagination('prev')

    if (isNextVisible) return setPagination('next')
  }, [])

  useEffect(() => {
    checkPagination()

    window.addEventListener('resize', checkPagination)

    return () => {
      window.removeEventListener('resize', checkPagination)
    }
  }, [checkPagination])

  return (
    <div className={wrapperCn()}>
      {(pagination === 'prev' || pagination === 'both') && (
        <div className={prevCn()} onClick={() => scrollTo('prev')}>
          <ScrollArrowIcon width={12} height={12} />
        </div>
      )}

      <div ref={ref} className={scrollerCn()} onScroll={checkPagination}>
        {children}
      </div>

      {(pagination === 'next' || pagination === 'both') && (
        <div className={nextCn()} onClick={() => scrollTo('next')}>
          <ScrollArrowIcon width={12} height={12} />
        </div>
      )}
    </div>
  )
}

const wrapperCn = cva([
  /** layout */
  'relative max-w-full',
])

const scrollerCn = cva([
  /** layout */
  'flex items-center gap-2 overflow-x-auto scroll-smooth scrollbar-hidden',
])

const buttonCn = cva([
  /** layout */
  'absolute top-0 w-9 h-9 flex items-center justify-center bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,white_50%)]',
  /** interaction */
  'cursor-pointer',
])

const prevCn = cva([
  buttonCn(),
  /** layout */
  'left-0 rotate-90',
])

const nextCn = cva([
  buttonCn(),
  /** layout */
  'right-0 -rotate-90',
])
