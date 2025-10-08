import { LinkText } from '@/source/shared/ui/LinkText'
import { useHeaderContext } from '@/source/widgets/layout/ui/Header/useHeaderContext'
import Link from 'next/link'

export const SignupSection = () => {
  const { device } = useHeaderContext()

  if (device === 'mobile') return null

  return (
    <LinkText as={Link} href="#">
      Sign up
    </LinkText>
  )
}
