import clsx from 'clsx'
import { FC, MouseEventHandler } from 'react'
import { motion } from 'framer-motion'
import styles from './index.module.css'
import { LucideIcon } from 'lucide-react'

export type SwitchProps = {
  isOn: boolean
  onIcon?: LucideIcon
  offIcon?: LucideIcon
} & React.HTMLAttributes<HTMLDivElement>

export const Switch: FC<SwitchProps> = (props) => {
  const { onIcon: OnIcon, offIcon: OffIcon, isOn, className, ...rest } = props
  return (
    <div data-is-on={isOn} className={clsx(styles.root, className)} {...rest}>
      {isOn && OnIcon && <OnIcon className={styles['on-icon']} />}
      <motion.div className={styles.status} layout transition={transition} />
      {!isOn && OffIcon && <OffIcon className={styles['off-icon']} />}
    </div>
  )
}

const transition = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}
