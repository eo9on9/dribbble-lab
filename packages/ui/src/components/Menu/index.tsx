import { Item, type ItemProps } from './Item'
import { ItemIcon } from './ItemIcon'
import { ItemText } from './ItemText'
import { Root, type RootProps } from './Root'
import { Separator } from './Separator'
import { SubContainer } from './SubContainer'
import { SubItem, type SubItemProps } from './SubItem'

// TODO: Mobile 스타일 추가

export const Menu = Object.assign(Root, {
  Item,
  ItemText,
  ItemIcon,
  SubContainer,
  SubItem,
  Separator,
})

export type {
  ItemProps as MenuItemProps,
  RootProps as MenuRootProps,
  SubItemProps as MenuSubItemProps,
}
