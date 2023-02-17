import clsx from 'clsx'
import { FC, InputHTMLAttributes } from 'react'
import styles from './index.module.css'

export type TextFieldProps = {
  label: string
  withUnit?: string
} & InputHTMLAttributes<HTMLInputElement>

export const TextField: FC<TextFieldProps> = (props) => {
  const { label, withUnit, ...rest } = props
  return (
    <label className={styles.label}>
      {label}
      <div className={styles['input-wrapper']}>
        <input
          className={clsx(styles.input, withUnit && styles['with-unit'])}
          type="text"
          {...rest}
        />
        {withUnit && <span>{withUnit}</span>}
      </div>
    </label>
  )
}
