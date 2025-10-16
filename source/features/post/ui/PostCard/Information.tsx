import { formatCompactNumber } from '@/source/shared/lib/utils/formatCompactNumber'
import { cva } from 'class-variance-authority'
import Image from 'next/image'
import { LikeIcon, ViewIcon } from '../../../../shared/ui/icons'

export interface InformationProps {
  likeCount: number
  viewCount: number
  isLiked?: boolean
  userName: string
  userImgSrc: string
  userType: 'team' | 'pro'
}

export const Information = ({
  userName,
  userImgSrc,
  userType,
  isLiked,
  likeCount,
  viewCount,
}: InformationProps) => {
  return (
    <div className={wrapperCn()}>
      <div className={userCn()}>
        <Image
          className={imageCn()}
          src={userImgSrc}
          alt="user profile image"
          width={24}
          height={24}
          unoptimized
        />
        <div className={nameCn()} aria-label="user name">
          {userName}
        </div>
        <div className={typeCn()} aria-label="user type">
          {userType.toUpperCase()}
        </div>
      </div>
      <div className={othersCn()}>
        <div className={countCn()} aria-label="like count">
          <LikeIcon className={iconCn({ isActive: isLiked })} />
          {formatCompactNumber(likeCount)}
        </div>
        <div className={countCn()} aria-label="view count">
          <ViewIcon className={iconCn()} />
          {formatCompactNumber(viewCount)}
        </div>
      </div>
    </div>
  )
}

const wrapperCn = cva([
  /** layout */
  'flex items-center justify-between gap-2',
])

const imageCn = cva([
  /** layout */
  'overflow-hidden rounded-full',
])

const userCn = cva([
  /** layout */
  'flex items-center gap-2 flex-1 min-w-0',
])

const nameCn = cva([
  /** layout */
  'overflow-hidden text-ellipsis whitespace-nowrap',
  /** text */
  'text-sm font-medium text-drb-black',
])

const typeCn = cva([
  /** layout */
  'p-[3px] rounded-[3px] bg-drb-gray-550',
  /** text */
  'leading-[1] text-[10px] font-bold text-white',
])

const othersCn = cva([
  /** layout */
  'flex items-center gap-2',
])

const countCn = cva([
  /** layout */
  'flex items-center gap-1',
  /** text */
  'text-xs font-medium text-drb-gray-800',
])

const iconCn = cva(
  [
    /** layout */
    'w-4 h-4 fill-current',
    /** text */
    'text-drb-gray-600',
  ],
  {
    variants: {
      isActive: {
        true: 'text-drb-pink-400',
        false: null,
      },
    },
  },
)
