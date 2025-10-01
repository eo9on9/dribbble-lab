import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Container } from './Container'

const useBoxControlContext = vi.hoisted(vi.fn)
vi.mock('@/source/shared/ui/SearchBox/BoxControlContext', () => ({
  useBoxControlContext,
}))

const setIsFocused = vi.fn()
const setIsHovered = vi.fn()
useBoxControlContext.mockReturnValue({
  setIsFocused,
  setIsHovered,
})

const setup = () => ({
  user: userEvent.setup(),
  ...render(
    <>
      <Container>
        <button>A</button>
        <button>B</button>
      </Container>
      <button>C</button>
    </>,
  ),
})

describe('[Component] SearchBox - Container', () => {
  test('컨테이너에 포커스가 설정/해제되면 컨텍스트의 포커스 상태를 변경한다.', async () => {
    const { user, getByRole } = setup()

    await user.click(getByRole('button', { name: 'A' }))

    expect(setIsFocused).toHaveBeenCalledWith(true)

    await user.click(getByRole('button', { name: 'B' }))

    expect(setIsFocused).toHaveBeenCalledWith(true)

    await user.click(getByRole('button', { name: 'C' }))

    expect(setIsFocused).toHaveBeenCalledWith(false)
  })
  test('컨테이너에 마우스 오버가 설정/해제되면 컨텍스트의 마우스 오버 상태를 변경한다.', async () => {
    const { user, getByRole } = setup()

    await user.hover(getByRole('button', { name: 'A' }))

    expect(setIsHovered).toHaveBeenCalledWith(true)

    await user.hover(getByRole('button', { name: 'B' }))

    expect(setIsHovered).toHaveBeenCalledWith(true)

    await user.hover(getByRole('button', { name: 'C' }))

    expect(setIsHovered).toHaveBeenCalledWith(false)
  })
})
