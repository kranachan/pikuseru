import clsx from 'clsx'
import { Button } from 'components/button'
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { FC, Fragment, ReactNode } from 'react'
import styles from './index.module.css'

export type DialogProps = {
  open: boolean
  onClose: () => void
  headline: string
  children?: ReactNode
} & HTMLMotionProps<'div'>

export const Dialog: FC<DialogProps> = (props) => {
  const { open, onClose, headline, className, children, ...rest } = props

  return (
    <AnimatePresence>
      {open && (
        <Fragment>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
          />
          <motion.div
            className={clsx(styles.root, className)}
            initial={{ scale: 0.5 }}
            animate={{ scale: [0.5, 1.05, 1] }}
            exit={{ scale: [1.05, 1, 0] }}
            transition={{ duration: 0.4 }}
            {...rest}
          >
            <div className={styles.header}>
              <b className={styles.headline}>{headline}</b>
              <Button className={styles['close-btn']} onClick={onClose}>
                <X />
              </Button>
            </div>
            {children}
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  )
}
