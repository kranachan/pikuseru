import { icons } from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { FC } from 'react'
import { LucideIconKey } from 'constants/icon'

export interface IconProps extends LucideProps {
  name: LucideIconKey
}

export const Icon: FC<IconProps> = (props) => {
  const { name, color, size, ...rest } = props
  const LucideIcon = name && icons[name]

  return <LucideIcon color={color} size={size} {...rest} />
}
