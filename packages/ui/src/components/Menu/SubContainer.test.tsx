import { act, render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { MenuProvider, useMenuContext } from './Context'
import { SubContainer } from './SubContainer'

const Tester = () => {
  const { isExpanded, setIsExpanded } = useMenuContext()

  return (
    <>
      <button onClick={() => setIsExpanded(!isExpanded)}>expand</button>
      <SubContainer />
    </>
  )
}

const setup = () => ({
  user: userEvent.setup(),
  ...render(
    <MenuProvider mode="pc">
      <Tester />
    </MenuProvider>,
  ),
})

describe('[Component] Menu - SubContainer', () => {
  test('확장 상태가 켜지면 서브 컨테이너가 표시된다.', async () => {
    const { user, getByRole } = setup()

    await user.click(getByRole('button', { name: 'expand' }))

    expect(getByRole('listbox')).toBeInTheDocument()
  })

  test('확장 상태가 꺼지면 200ms 후에 서브 컨테이너가 사라진다.', async () => {
    vi.useFakeTimers({
      shouldAdvanceTime: true,
    })

    const { user, getByRole, queryByRole } = setup()

    await user.click(getByRole('button', { name: 'expand' }))

    expect(getByRole('listbox')).toBeInTheDocument()

    await user.click(getByRole('button', { name: 'expand' }))

    expect(getByRole('listbox')).toBeInTheDocument()

    await act(() => vi.advanceTimersByTime(200))

    expect(queryByRole('listbox')).not.toBeInTheDocument()

    vi.useRealTimers()
  })
})
