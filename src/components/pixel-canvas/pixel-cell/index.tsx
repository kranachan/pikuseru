import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import styles from './index.module.css'

export type PixelCellProps = {
  size: string
} & HTMLAttributes<HTMLDivElement>

export const PixelCell: FC<PixelCellProps> = (props) => {
  const { className, size, ...rest } = props

  return (
    <div
      className={clsx(styles.cell, className)}
      style={{ width: size, paddingBottom: size }}
      {...rest}
    />
  )
}
