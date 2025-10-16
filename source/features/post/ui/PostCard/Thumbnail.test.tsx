import { render } from '@testing-library/react'
import { Thumbnail } from './Thumbnail'

const THUMBNAIL_ALT = 'thumbnail'
const THUMBNAIL_SRC = 'https://www.test.com/image.png'

const setup = () => {
  return render(<Thumbnail src={THUMBNAIL_SRC} alt={THUMBNAIL_ALT} />)
}

describe('[Features] <PostCard> - <Thumbnail>', () => {
  test('이미지가 표시된다.', () => {
    const { getByRole } = setup()

    expect(getByRole('img')).toHaveAttribute('alt', THUMBNAIL_ALT)
  })
})
