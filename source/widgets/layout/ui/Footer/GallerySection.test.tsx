import {
  FOOTER_GALLARY_ITEMS,
  GallerySection,
} from '@/source/widgets/layout/ui/Footer/GallerySection'
import { render } from '@testing-library/react'

describe('[Widgets] <Footer> - <GallerySection>', () => {
  test('컴포넌트가 렌더링된다.', () => {
    const { getByRole, getAllByRole } = render(<GallerySection />)

    getByRole('list')

    getAllByRole('listitem').forEach((item, index) => {
      expect(item).toHaveTextContent(
        [...FOOTER_GALLARY_ITEMS, ...FOOTER_GALLARY_ITEMS][index].title,
      )
    })
  })
})
