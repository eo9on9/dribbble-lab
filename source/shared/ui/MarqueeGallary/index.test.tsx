import { MarqueeGallary } from '@/source/shared/ui/MarqueeGallary'
import { render } from '@testing-library/react'

const MARQUEE_GALLARY_ITEMS = [
  {
    title: 'Print',
    imageSrc: '/assets/images/marquee-print.webp',
    href: '#',
  },
  {
    title: 'Typography',
    imageSrc: '/assets/images/marquee-typography.webp',
    href: '#',
  },
]

describe('[Shared] MarqueeGallary', () => {
  test('주입한 데이터의 2배에 해당하는 요소를 생성한다.', () => {
    const { getAllByRole } = render(
      <MarqueeGallary items={MARQUEE_GALLARY_ITEMS} />,
    )

    expect(getAllByRole('img')).toHaveLength(MARQUEE_GALLARY_ITEMS.length * 2)
  })
})
