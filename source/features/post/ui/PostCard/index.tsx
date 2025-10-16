import { cva } from 'class-variance-authority'
import Link from 'next/link'
import { useState } from 'react'
import { Information } from './Information'
import { Overlay } from './Overlay'
import { Thumbnail } from './Thumbnail'

export interface PostCardProps {
  title: string
  href?: string
  imgSrc: string
  likeCount: number
  viewCount: number

  isLiked?: boolean
  onLikeClick?: () => void
  isBookmarked?: boolean
  onBookmarkClick?: () => void

  userName: string
  userImgSrc: string
  userType: 'team' | 'pro'
}

export const PostCard = ({
  title,
  href = '#',
  imgSrc,
  likeCount,
  viewCount,
  isLiked = false,
  onLikeClick,
  isBookmarked = false,
  onBookmarkClick,
  userName,
  userImgSrc,
  userType,
}: PostCardProps) => {
  const [isThumbnailHover, setIsThumbnailHover] = useState(false)

  return (
    <div className={wrapperCn()}>
      <div
        className={thumbnailWrapperCn()}
        onMouseEnter={() => setIsThumbnailHover(true)}
        onMouseLeave={() => setIsThumbnailHover(false)}
      >
        <Link href={href}>
          <Thumbnail src={imgSrc} alt={title} />
          <Overlay
            isOpen={isThumbnailHover}
            title={title}
            isLiked={isLiked}
            onLikeClick={onLikeClick}
            isBookmarked={isBookmarked}
            onBookmarkClick={onBookmarkClick}
          />
        </Link>
      </div>
      <Information
        userName={userName}
        userImgSrc={userImgSrc}
        userType={userType}
        isLiked={isLiked}
        likeCount={likeCount}
        viewCount={viewCount}
      />
    </div>
  )
}

const wrapperCn = cva([
  /** layout */
  'flex flex-col gap-2',
])

const thumbnailWrapperCn = cva([
  /** layout */
  'relative overflow-hidden w-full aspect-4/3 rounded-lg',
])
