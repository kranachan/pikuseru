import clsx from 'clsx'
import { AnimatePresence, HTMLMotionProps } from 'framer-motion'
import { FC } from 'react'
import { motion } from 'framer-motion'
import styles from './index.module.css'
import { Button } from 'components/button'
import { Icon } from 'components/icon'

export type CanvasOptionPanelProps = {
  expanded: boolean
  toggleExpanded: () => void
} & HTMLMotionProps<'div'>

export const CanvasOptionPanel: FC<CanvasOptionPanelProps> = (props) => {
  const { className, expanded, toggleExpanded, ...rest } = props
  const PANEL_INITIAL_WIDTH = 384

  return (
    <div className={styles.root}>
      <AnimatePresence>
        {expanded && (
          <motion.div
            className={clsx(styles.panel, className)}
            initial={{ width: 0 }}
            animate={{ width: PANEL_INITIAL_WIDTH }}
            exit={{ width: 0 }}
            {...rest}
          ></motion.div>
        )}
      </AnimatePresence>
      <Button onClick={toggleExpanded} className={styles['expanded-button']}>
        <Icon name={expanded ? 'ArrowLeft' : 'ArrowRight'} />
      </Button>
    </div>
  )
}
