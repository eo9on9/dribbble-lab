import { Item } from '@/source/shared/ui/MarqueeGallary/Item'
import { render } from '@testing-library/react'

const setup = () =>
  render(<Item title="Test" imageSrc="/test.jpg" href="test.com" />)

describe('[Shared] <MarqueeGallary> - <Item>', () => {
  test('title이 표시된다.', () => {
    const { getByText } = setup()

    getByText('Test')
  })

  test('image가 표시된다.', () => {
    const { getByRole } = setup()

    getByRole('img')
  })

  test('title이 이미지의 alt 속성에 표시된다.', () => {
    const { getByRole } = setup()

    expect(getByRole('img')).toHaveAttribute('alt', 'Test')
  })

  test('href 속성이 있는 링크 태그가 표시된다.', () => {
    const { getByRole } = setup()

    expect(getByRole('link')).toHaveAttribute('href', 'test.com')
  })
})
