import { PauseIcon, PlayIcon } from '@/source/shared/ui/icons'
import { useVideoSlidesContext } from '@/source/shared/ui/VideoSlides/useVideoSlidesContext'
import { cva } from 'class-variance-authority'

export const Control = () => {
  const { isPlaying, setIsPlaying, isHover } = useVideoSlidesContext()

  const handlePauseClick = () => {
    setIsPlaying(false)
  }

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  return (
    <div className={wrapperCn({ isHover })}>
      {isPlaying ? (
        <button
          className={buttonCn()}
          onClick={handlePauseClick}
          aria-label="Pause"
        >
          <PauseIcon className={iconCn()} />
        </button>
      ) : (
        <button
          className={buttonCn()}
          onClick={handlePlayClick}
          aria-label="Play"
        >
          <PlayIcon className={iconCn()} />
        </button>
      )}
    </div>
  )
}

const wrapperCn = cva(
  [
    /** layout */
    `absolute bottom-[11px] left-[14px] transition-opacity duration-250 ease-in-out`,
  ],
  {
    variants: {
      isHover: {
        true: 'opacity-100',
        false: 'opacity-0',
      },
    },
  },
)

const buttonCn = cva([
  /** layout */
  'flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-[0_2px_4px_rgba(6,3,24,0.1)]',
  /** text */
  'text-drb-black',
  /** interaction */
  'cursor-pointer hover:text-drb-pink-400 active:scale-90',
])

const iconCn = cva([
  /** layout */
  'w-4 h-4',
])
