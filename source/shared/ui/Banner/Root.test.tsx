import { Banner } from '@/source/shared/ui/Banner'
import { render } from '@testing-library/react'

describe('[Shared] <Banner> - <Root>', () => {
  test('주입한 url을 갖는 링크를 표시한다.', () => {
    const { getByRole } = render(<Banner href="https://test.com">Test</Banner>)

    const link = getByRole('link', { name: 'Test' })

    expect(link).toHaveAttribute('href', 'https://test.com')
  })
})
