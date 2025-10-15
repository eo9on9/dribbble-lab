import { cva } from 'class-variance-authority'
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  type FocusEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  icon?: ReactNode
  prefix?: string
  size?: 'md' | 'lg'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { icon, prefix, onFocus, onBlur, size = 'md', className, ...props },
    ref,
  ) => {
    const [isShowPrefix, setIsShowPrefix] = useState(
      Boolean(props.value || props.defaultValue),
    )

    const wrapperRef = useRef<HTMLDivElement>(null)

    const innerRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => innerRef.current!)

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
      setIsShowPrefix(true)

      onFocus?.(e)
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      setIsShowPrefix(Boolean(innerRef.current?.value.length))

      onBlur?.(e)
    }

    return (
      <div
        className={cva([boxClassName({ size }), className])()}
        ref={wrapperRef}
        onClick={() => innerRef.current?.focus()}
      >
        {icon && (
          <span
            className={iconWrapClassName()}
            onClick={() => innerRef.current?.focus()}
          >
            {icon}
          </span>
        )}
        <span className={inputWrapClassName()}>
          {prefix && isShowPrefix && <span aria-label="prefix">{prefix}</span>}
          <input
            className={inputClassName()}
            ref={innerRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
        </span>
      </div>
    )
  },
)

Input.displayName = 'Input'

const boxClassName = cva(
  [
    /** layout */
    'flex items-center gap-3 px-4 border border-drb-gray-300 rounded-lg',
    /** text */
    'text-drb-black text-sm',
    /** interaction */
    'cursor-text',
    /** interaction: focus */
    'focus-within:border-pink-400 focus-within:shadow-[0_0_0_4px_rgba(234,100,217,0.1)]',
    /** interaction: hover */
    'hover:shadow-[0_0_0_4px_rgba(234,100,217,0.1)]',
    /** interaction: active */
    'active:shadow-none active:border-drb-gray-300',
  ],
  {
    variants: {
      size: {
        md: 'h-10',
        lg: 'h-14',
      },
    },
  },
)

const iconWrapClassName = cva([
  /** layout */
  'w-4 h-4',
])

const inputWrapClassName = cva([
  /** layout */
  'flex items-center flex-auto h-full gap-[2px]',
])

const inputClassName = cva([
  /** layout */
  'w-full h-full outline-0',
])
