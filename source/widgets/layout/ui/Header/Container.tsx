import { useHeaderContext } from '@/source/widgets/layout/ui/Header/useHeaderContext'
import { cva } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

export const Container = ({ children }: PropsWithChildren) => {
  const { isFixed, isSearchToggle } = useHeaderContext()

  const spaceCn = isSearchToggle ? toggleCn : normalCn

  return (
    <header>
      <div className={containerCn({ isFixed })}>{children}</div>
      <div className={spaceCn({ isFixed })} />
    </header>
  )
}

const containerCn = cva(
  [
    /** layout */
    'flex items-center justify-between gap-8 w-full h-[58px] px-4 bg-white tablet:h-[92px]',
  ],
  {
    variants: {
      isFixed: {
        true: 'fixed top-0 left-0',
        false: 'relative',
      },
    },
  },
)

const toggleCn = cva(null, {
  variants: {
    isFixed: {
      true: 'h-[58px] tablet:h-[92px]',
      false: null,
    },
  },
})

const normalCn = cva(null, {
  variants: {
    isFixed: {
      true: 'h-[118px] tablet:h-[92px]',
      false: 'h-[60px] tablet:h-0',
    },
  },
})
