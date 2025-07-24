import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { ClearButton } from './ClearButton'

const useBoxControlContext = vi.hoisted(vi.fn)
vi.mock('../contexts/BoxControlContext', () => ({
  useBoxControlContext,
}))

describe('<ClearButton />', () => {
  test('박스가 포커스되어 있지 않고 호버되어 있지 않으면 버튼이 렌더링되지 않는다.', () => {
    useBoxControlContext.mockReturnValue({
      isFocused: false,
      isHovered: false,
    })

    render(<ClearButton />)

    expect(
      screen.queryByRole('button', { name: 'Clear' }),
    ).not.toBeInTheDocument()
  })

  test('박스가 포커스 되어 있거나 호버되어 있으면 버튼이 렌더링된다.', () => {
    useBoxControlContext.mockReturnValue({
      isFocused: true,
      isHovered: false,
    })

    const { rerender } = render(<ClearButton />)

    expect(screen.queryByRole('button', { name: 'Clear' })).toBeInTheDocument()

    useBoxControlContext.mockReturnValue({
      isFocused: false,
      isHovered: true,
    })

    rerender(<ClearButton />)

    expect(screen.queryByRole('button', { name: 'Clear' })).toBeInTheDocument()

    useBoxControlContext.mockReturnValue({
      isFocused: true,
      isHovered: true,
    })

    rerender(<ClearButton />)

    expect(screen.queryByRole('button', { name: 'Clear' })).toBeInTheDocument()
  })

  test('버튼을 클릭하면 onClick 함수가 호출된다.', async () => {
    const user = userEvent.setup()

    const onClick = vi.fn()

    render(<ClearButton onClick={onClick} />)

    await user.click(screen.getByRole('button', { name: 'Clear' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
