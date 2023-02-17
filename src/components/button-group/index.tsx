import clsx from 'clsx'
import { Children, cloneElement, FC, isValidElement, ReactNode } from 'react'
import styles from './index.module.css'

export type ButtonGroupProps = {
  groupName?: string
  styleForButtons?: string
  children?: ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  const { groupName, styleForButtons, className, children, ...rest } = props
  const childrens = Children.toArray(children)
  const groupedChildren = childrens.map((child, index) => {
    if (!isValidElement(child)) {
      return
    }

    const isFirst = index === 0
    const isLast = index === childrens.length - 1
    const borderClass = isFirst
      ? styles['is-first']
      : isLast
      ? styles['is-last']
      : styles['is-middle']

    return cloneElement(child, {
      ...child.props,
      className: clsx(
        child.props.className,
        childrens.length !== 1 && borderClass,
        styleForButtons,
      ),
    })
  })

  return (
    <div className={styles['group-root']}>
      <b className={styles['group-name']}>{groupName}</b>
      <div className={clsx(styles['group-buttons'], className)} {...rest}>
        {groupedChildren}
      </div>
    </div>
  )
}
