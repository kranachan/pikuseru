import clsx from 'clsx'
import { FC, HTMLAttributes, MouseEventHandler, useState } from 'react'
import { PixelCell } from './pixel-cell'
import styles from './index.module.css'

export type PixelCanvasProps = {
  col: number
  row: number
  backgroundColor?: string
} & HTMLAttributes<HTMLDivElement>

export const PixelCanvas: FC<PixelCanvasProps> = (props) => {
  const { className, col, row, backgroundColor = 'white', ...rest } = props

  const [isMouseDown, setIsMouseDown] = useState(false)

  const totalCells = Array.from(Array(col * row).keys())
  const percentageOfSize = (1 / col) * 100 + '%'

  const onMouseOver: MouseEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.style.filter = 'brightness(0.8)'
    if (isMouseDown) {
      e.currentTarget.style.backgroundColor = 'black'
    }
  }

  const onMouseOut: MouseEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.style.filter = 'none'
  }

  const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.style.backgroundColor = 'black'
    setIsMouseDown(true)
  }

  const onMouseUp: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsMouseDown(false)
  }

  return (
    <div
      className={clsx(styles.canvas, className)}
      style={{ backgroundColor }}
      {...rest}
    >
      {totalCells.map((cell) => (
        <PixelCell
          key={cell}
          size={percentageOfSize}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        />
      ))}
    </div>
  )
}
