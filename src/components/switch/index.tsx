import clsx from 'clsx'
import { FC } from 'react'
import { motion } from 'framer-motion'
import styles from './index.module.css'
import { LucideIconKey } from 'constants/icon'
import { Icon } from 'components/icon'

export type SwitchProps = {
  isOn: boolean
  onIcon?: LucideIconKey
  offIcon?: LucideIconKey
} & React.HTMLAttributes<HTMLDivElement>

export const Switch: FC<SwitchProps> = (props) => {
  const { onIcon, offIcon, isOn, className, ...rest } = props
  return (
    <div data-is-on={isOn} className={clsx(styles.root, className)} {...rest}>
      {isOn && onIcon && <Icon name={onIcon} className={styles['on-icon']} />}
      <motion.div className={styles.status} layout transition={transition} />
      {!isOn && offIcon && (
        <Icon name={offIcon} className={styles['off-icon']} />
      )}
    </div>
  )
}

const transition = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}
