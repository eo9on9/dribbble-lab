import { useVideoSlidesContext } from '@/source/shared/ui/VideoSlides/useVideoSlidesContext'
import { cva } from 'class-variance-authority'
import Image from 'next/image'

export const Profile = () => {
  const { item } = useVideoSlidesContext()

  return (
    <div className={wrapperCn()}>
      <div className={imageCn()}>
        <Image
          src={item.userImageSrc}
          alt={'user image'}
          width={32}
          height={32}
          unoptimized
        />
      </div>
      <div className={nameCn()} aria-label="user name">
        {item.userName}
      </div>
    </div>
  )
}

const wrapperCn = cva([
  /** layout */
  'absolute bottom-[11px] right-[14px] flex items-center gap-2 rounded-full p-1 pr-4 bg-white shadow-[0_2px_4px_rgba(6,3,24,0.1)]',
])

const imageCn = cva([
  /** layout */
  'overflow-hidden w-8 h-8 rounded-full',
])

const nameCn = cva([
  /** text */
  'text-xs font-semibold text-drb-black',
])
