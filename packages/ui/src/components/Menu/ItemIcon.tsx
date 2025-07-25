import { MenuArrowIcon } from '#icons'
import { cva } from 'class-variance-authority'
import { useMenuContext } from './Context'

export const ItemIcon = () => {
  const { isExpanded } = useMenuContext()

  return (
    <MenuArrowIcon
      width={10}
      height={9}
      className={iconClassName({ isExpanded })}
    />
  )
}

const iconClassName = cva('', {
  variants: {
    isExpanded: {
      true: 'rotate-180',
      false: 'rotate-0',
    },
  },
})
