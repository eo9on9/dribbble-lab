import { VideoSlides } from '@/source/shared/ui/VideoSlides'

const ITEMS = [
  {
    videoSrc:
      'https://cdn.pixabay.com/video/2021/01/03/61037-497754241_large.mp4',

    userName: 'Evelyn Carter',
    userImageSrc:
      'https://api.dicebear.com/7.x/adventurer/svg?seed=EvelynCarter',
  },
  {
    videoSrc:
      'https://cdn.pixabay.com/video/2017/12/05/13232-246463976_small.mp4',
    userName: 'Nathan Brooks',
    userImageSrc:
      'https://api.dicebear.com/7.x/adventurer/svg?seed=NathanBrooks',
  },
  {
    videoSrc:
      'https://cdn.pixabay.com/video/2016/11/15/6387-191695740_small.mp4',
    userName: 'Isabella Grant',
    userImageSrc:
      'https://api.dicebear.com/7.x/adventurer/svg?seed=IsabellaGrant',
  },
  {
    videoSrc:
      'https://cdn.pixabay.com/video/2024/03/12/203874-922675723_small.mp4',
    userName: 'Liam Douglas',
    userImageSrc:
      'https://api.dicebear.com/7.x/adventurer/svg?seed=LiamDouglas',
  },
  {
    videoSrc:
      'https://cdn.pixabay.com/video/2024/03/26/205691-927672681_small.mp4',
    userName: 'Sophia Reed',
    userImageSrc: 'https://api.dicebear.com/7.x/adventurer/svg?seed=SophiaReed',
  },
]

export const HeroVideo = () => {
  return <VideoSlides items={ITEMS} />
}
