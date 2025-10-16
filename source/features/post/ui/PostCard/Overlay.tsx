import { BookmarkIcon, LikeIcon } from '@/source/shared/ui/icons'
import { cva } from 'class-variance-authority'

export interface OverlayProps {
  isOpen?: boolean
  title: string
  isLiked?: boolean
  onLikeClick?: () => void
  isBookmarked?: boolean
  onBookmarkClick?: () => void
}

export const Overlay = ({
  isOpen = false,
  title,
  isLiked,
  onLikeClick,
  isBookmarked,
  onBookmarkClick,
}: OverlayProps) => {
  return (
    <div className={wrapperCn({ isOpen })}>
      <div className={innerCn()}>
        <div className={titleCn()}>{title}</div>
        <div className={actionsCn()}>
          <button
            ref={ref => {
              if (ref) {
                ref.addEventListener('click', e => {
                  e.preventDefault()
                  e.stopPropagation()

                  onBookmarkClick?.()
                })
              }
            }}
            className={buttonCn({ isActive: isBookmarked })}
            aria-pressed={isBookmarked}
            aria-label="Bookmark"
          >
            <BookmarkIcon className={iconCn({ isActive: isBookmarked })} />
          </button>
          <button
            ref={ref => {
              if (ref) {
                ref.addEventListener('click', e => {
                  e.preventDefault()
                  e.stopPropagation()

                  onLikeClick?.()
                })
              }
            }}
            className={buttonCn({ isActive: isLiked })}
            aria-pressed={isLiked}
            aria-label="Like"
          >
            <LikeIcon className={iconCn({ isActive: isLiked })} />
          </button>
        </div>
      </div>
    </div>
  )
}

const wrapperCn = cva(
  [
    /** layout */
    'absolute top-0 left-0 w-full h-full overlay-gradient',
    /** transition */
    'transition-opacity duration-300 ease',
  ],
  {
    variants: {
      isOpen: {
        true: 'opacity-100',
        false: 'opacity-0',
      },
    },
  },
)

const innerCn = cva([
  /** layout */
  'absolute bottom-0 left-0 flex items-center justify-between gap-3 w-full p-5',
])

const titleCn = cva([
  /** layout */
  'overflow-hidden text-ellipsis whitespace-nowrap',
  /** text */
  'font-medium text-white',
])

const actionsCn = cva([
  /** layout */
  'flex items-center gap-3',
])

const buttonCn = cva(
  [
    /** layout */
    'flex items-center justify-center w-10 h-10 rounded-full',
    /** interaction */
    'cursor-pointer',
  ],
  {
    variants: {
      isActive: {
        true: 'bg-drb-pink-40',
        false: 'bg-white hover:text-drb-gray-750',
      },
    },
  },
)

const iconCn = cva(
  [
    /** layout */
    'w-4 h-4',
  ],
  {
    variants: {
      isActive: {
        true: 'fill-current text-drb-pink-400',
        false: null,
      },
    },
  },
)
