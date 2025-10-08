import { Button } from '@/source/shared/ui/Button'
import Link from 'next/link'

export const LoginSection = () => {
  return (
    <Button as={Link} href="#">
      Log in
    </Button>
  )
}
