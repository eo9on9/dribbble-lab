import { cva } from 'class-variance-authority'
import { type PropsWithChildren, useEffect, useRef } from 'react'

interface ButtonProps {
  active: boolean
  onClick: () => void
}

export const Button = ({
  active,
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  const ref = useRef<HTMLButtonElement>(null)

  const _active = useRef(active)

  useEffect(() => {
    if (_active.current && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'instant',
        inline: 'center',
      })
    }
  }, [])

  return (
    <button
      ref={ref}
      className={buttonClassName({ active })}
      onClick={onClick}
      aria-pressed={active}
    >
      {children}
    </button>
  )
}

const buttonClassName = cva(
  [
    /** layout */
    'h-9 px-4 rounded-full',
    /** text */
    'text-sm font-semibold text-drb-black whitespace-nowrap',
    /** interaction */
    'cursor-pointer outline-0 focus-visible:ring-2 focus-visible:ring-drb-ring hover:text-drb-gray-750',
    /** animation */
    'transition-all duration-100',
  ],
  {
    variants: {
      active: {
        true: [
          /** layout */
          'bg-drb-gray-40',
          /** interaction */
          'hover:text-drb-black0',
        ],
        false: null,
      },
    },
  },
)
