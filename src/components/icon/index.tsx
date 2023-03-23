import * as icons from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { FC } from 'react'
import { LucideIconKeyMap } from 'constants/icon'

export interface IconProps extends LucideProps {
  name: LucideIconKeyMap
}

export const Icon: FC<IconProps> = (props) => {
  const { name, color, size } = props
  const LucideIcon = name && icons[name]

  return <LucideIcon color={color} size={size} />
}
