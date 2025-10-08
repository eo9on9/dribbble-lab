import type { Device } from '@/source/shared/constants/breakpoints'
import { SearchSection } from '@/source/widgets/layout/ui/Header/SearchSection'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'

const useHeaderContext = vi.hoisted(vi.fn)
vi.mock('@/source/widgets/layout/ui/Header/useHeaderContext', () => ({
  useHeaderContext,
}))

const useMountTransition = vi.hoisted(vi.fn)
vi.mock('@/source/shared/lib/hooks/useMountTransition', () => ({
  useMountTransition,
}))

const queryClient = new QueryClient()

const setup = ({
  device = 'mobile',
  isSearchToggle = false,
  isFixed = false,
  isCreated = true,
}: {
  device?: Device
  isSearchToggle?: boolean
  isSearchOpen?: boolean
  isFixed?: boolean
  isCreated?: boolean
} = {}) => {
  useHeaderContext.mockReturnValue({
    device,
    isSearchToggle,
    isFixed,
    isSearchOpen: false,
    setIsSearchOpen: vi.fn(),
    isMenuOpen: false,
    setIsMenuOpen: vi.fn(),
  })
  useMountTransition.mockReturnValue({
    isCreated,
    isShown: false,
  })

  return render(
    <QueryClientProvider client={queryClient}>
      <SearchSection />
    </QueryClientProvider>,
  )
}

describe('[Widgets] <Header> - <SearchSection>', () => {
  test('모바일 해상도의 메인 페이지에서 헤더가 Fixed 상태가 아닐 때에는 컴포넌트가 렌더링 되지 않는다.', () => {
    const { queryByRole } = setup({
      device: 'mobile',
      isSearchToggle: true,
      isFixed: false,
    })

    expect(queryByRole('div')).not.toBeInTheDocument()
  })
  test('모바일 해상도의 메인 페이지에서 헤더가 Fixed 상태이면서 검색 박스가 열림 상태일 때에는 컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = setup({
      device: 'mobile',
      isSearchToggle: true,
      isFixed: true,
      isCreated: true,
    })

    getByRole('searchbox')
  })
  test('태블릿 해상도의 메인 페이지에서 헤더가 Fixed 상태가 아닐 때에는 컴포넌트가 렌더링 되지 않는다.', () => {
    const { queryByRole } = setup({
      device: 'tablet',
      isSearchToggle: true,
      isFixed: false,
    })

    expect(queryByRole('div')).not.toBeInTheDocument()
  })
  test('태블릿 해상도의 메인 페이지에서 헤더가 Fixed 상태이면서 검색 박스가 열림 상태일 때에는 컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = setup({
      device: 'tablet',
      isSearchToggle: true,
      isFixed: true,
      isCreated: true,
    })

    getByRole('searchbox')
  })
  test('PC 해상도의 메인 페이지에서 헤더가 Fixed 상태가 아닐 때에는 컴포넌트가 렌더링 되지 않는다.', () => {
    const { queryByRole } = setup({
      device: 'pc',
      isSearchToggle: true,
      isFixed: false,
    })

    expect(queryByRole('div')).not.toBeInTheDocument()
  })
  test('PC 해상도의 메인 페이지에서 헤더가 Fixed 상태이면서 검색 박스가 열림 상태일 때에는 컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = setup({
      device: 'pc',
      isSearchToggle: true,
      isFixed: true,
      isCreated: true,
    })

    getByRole('searchbox')
  })

  test('모바일 해상도의 일반 페이지에서 검색 박스가 닫힘 상태일 때에는 컴포넌트가 렌더링 되지 않는다.', () => {
    const { queryByRole } = setup({
      device: 'mobile',
      isSearchToggle: false,
      isCreated: false,
    })

    expect(queryByRole('div')).not.toBeInTheDocument()
  })
  test('모바일 해상도의 일반 페이지에서 검색 박스가 열림 상태일 때에는 컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = setup({
      device: 'mobile',
      isSearchToggle: false,
      isCreated: true,
    })

    getByRole('searchbox')
  })
  test('태블릿 해상도의 일반 페이지에서 컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = setup({
      device: 'tablet',
      isSearchToggle: false,
    })

    getByRole('searchbox')
  })
  test('PC 해상도의 일반 페이지에서 컴포넌트가 렌더링 된다.', () => {
    const { getByRole } = setup({
      device: 'pc',
      isSearchToggle: false,
    })

    getByRole('searchbox')
  })
})
