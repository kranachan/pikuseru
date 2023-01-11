import clsx from 'clsx'
import { FC } from 'react'
import styles from './index.module.css'

export type ButtonProps = {
  selected?: boolean
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
      {...rest}
    >
      {children}
    </button>
  )
}
