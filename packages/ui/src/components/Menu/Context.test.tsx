import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { MenuProvider, useMenuContext } from './Context'

const Tester = () => {
  const { isExpanded, setIsExpanded } = useMenuContext()

  return (
    <>
      <h1>isExpanded: {isExpanded ? 'true' : 'false'}</h1>
      <button onClick={() => setIsExpanded(true)}>expand</button>
    </>
  )
}

describe('[Context] Menu - Context', () => {
  test('모드가 변경되면 메뉴 확장 여부가 초기화된다.', async () => {
    const user = userEvent.setup()

    const { getByRole, getByText, rerender } = render(
      <MenuProvider mode="pc">
        <Tester />
      </MenuProvider>,
    )

    await user.click(getByRole('button', { name: 'expand' }))

    expect(getByText('isExpanded: true')).toBeInTheDocument()

    rerender(
      <MenuProvider mode="mobile">
        <Tester />
      </MenuProvider>,
    )

    expect(getByText('isExpanded: false')).toBeInTheDocument()

    await user.click(getByRole('button', { name: 'expand' }))

    expect(getByText('isExpanded: true')).toBeInTheDocument()

    rerender(
      <MenuProvider mode="pc">
        <Tester />
      </MenuProvider>,
    )

    expect(getByText('isExpanded: false')).toBeInTheDocument()
  })
})
