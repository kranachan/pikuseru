import clsx from 'clsx'
import { FC } from 'react'
import styles from './index.module.css'

type ButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, disabled, ...rest } = props
  return (
    <button
      className={clsx(styles.button, disabled && styles.disabled, className)}
      {...rest}
    >
      {children}
    </button>
  )
}
