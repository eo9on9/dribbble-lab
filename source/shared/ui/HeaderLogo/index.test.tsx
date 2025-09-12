import { render } from '@testing-library/react'

import { HeaderLogo } from './index'

describe('[Component] HeaderLogo', () => {
  test('로고가 렌더링 된다.', () => {
    const { getByLabelText } = render(<HeaderLogo />)

    expect(getByLabelText('Go to home')).toBeInTheDocument()
  })
})
