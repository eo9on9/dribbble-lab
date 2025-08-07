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

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** 아이콘 */
  icon?: ReactNode

  /** 접두사 (예: #) */
  prefix?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, prefix, onFocus, onBlur, className, ...props }, ref) => {
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
        className={cva([boxClassName(), className])()}
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

const boxClassName = cva([
  /** layout */
  'flex items-center gap-3 px-4 h-10 border border-gray-300 rounded-lg',
  /** text */
  'text-gray-900 text-sm',
  /** interactivity */
  'cursor-text',
  /** case: focus */
  'focus-within:border-pink-400 focus-within:shadow-[0_0_0_4px_rgba(234,100,217,0.1)]',
  /** case: hover */
  'hover:shadow-[0_0_0_4px_rgba(234,100,217,0.1)]',
  /** case: active */
  'active:shadow-none active:border-gray-300',
])

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
