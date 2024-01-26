import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import styles from './index.module.css'

export type ButtonProps = {
  selected?: boolean
  children?: ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, disabled, selected, ...rest } = props
  return (
    <button
      className={clsx(
        styles.button,
        disabled && styles.disabled,
        selected && styles.selected,
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
