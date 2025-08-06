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

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** 아이콘 */
  icon?: ReactNode

  /** 접두사 (예: #) */
  prefix?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, prefix, onFocus, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)

    const wrapperRef = useRef<HTMLDivElement>(null)

    const innerRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => innerRef.current!)

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)

      onFocus?.(e)
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)

      onBlur?.(e)
    }

    const isShowPrefix = isFocused || innerRef.current?.value.length

    return (
      <div
        className={boxClassName()}
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
          {Boolean(prefix && isShowPrefix) && (
            <span className={prefixWrapClassName()}>{prefix}</span>
          )}
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
  'flex items-center gap-3 w-full px-4 h-10 border border-gray-300 rounded-lg cursor-text text-gray-900 text-sm',
)

const iconWrapClassName = cva('w-4 h-4')

const prefixWrapClassName = cva('')

const inputWrapClassName = cva('flex items-center flex-auto gap-[2px]')

const inputClassName = cva('w-full outline-0')
