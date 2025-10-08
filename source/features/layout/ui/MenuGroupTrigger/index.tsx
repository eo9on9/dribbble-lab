import { cva } from 'class-variance-authority'

interface MenuGroupTriggerProps {
  /** 메뉴 그룹 열림 상태 */
  isOpen: boolean

  /** 클릭 이벤트 핸들러 */
  onClick?: (value: boolean) => void
}

export const MenuGroupTrigger = ({
  isOpen,
  onClick,
}: MenuGroupTriggerProps) => {
  return (
    <button
      onClick={() => onClick?.(!isOpen)}
      aria-label="Toggle menu"
      className={buttonCn()}
    >
      <span className={lineOneCn({ isOpen })} />
      <span className={lineTwoCn({ isOpen })} />
      <span className={lineThreeCn({ isOpen })} />
    </button>
  )
}

const buttonCn = cva([
  /** layout */
  'flex flex-col gap-1 w-6',
  /** interaction */
  'cursor-pointer',
])

const lineBaseCn = cva([
  /** layout */
  'h-[3px] rounded-full bg-drb-black',
  /** transition */
  'transition-all duration-200 ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]',
])

const lineOneCn = cva([lineBaseCn(), 'w-full'], {
  variants: {
    isOpen: {
      true: 'w-full rotate-45 origin-left transform-[translate(-1px,-2px)]',
      false: 'rotate-0',
    },
  },
})

const lineTwoCn = cva([lineBaseCn(), 'w-[75%]'], {
  variants: {
    isOpen: {
      true: 'opacity-0',
      false: 'opacity-100',
    },
  },
})

const lineThreeCn = cva([lineBaseCn(), 'w-[50%]'], {
  variants: {
    isOpen: {
      true: 'w-full -rotate-45 origin-left',
      false: 'rotate-0',
    },
  },
})
