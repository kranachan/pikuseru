import { Button } from 'components/button'
import { Dialog } from 'components/dialog'
import { TextField } from 'components/text-field'
import { DEFAULT_SIZE, MIN_SIZE, CanvasSize } from 'constants/canvas'
import { ChangeEventHandler, FC, FocusEventHandler, useState } from 'react'
import styles from './index.module.css'

export type CreateDialogProps = {
  open: boolean
  onClose: () => void
  onContinue: (size: CanvasSize) => void
}

export const CreateDialog: FC<CreateDialogProps> = (props) => {
  const { open, onClose, onContinue } = props
  const [size, setSize] = useState<CanvasSize>({
    width: DEFAULT_SIZE,
    height: DEFAULT_SIZE,
  })

  const setSizeByName = (name: keyof CanvasSize, value: string) => {
    setSize((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const validNumberRegex = /^\d+$/
    const { name, value } = e.target
    if (!validNumberRegex.test(value) && value) {
      return
    }
    setSizeByName(name as keyof CanvasSize, value)
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target
    if (!e.target.value || Number(value) < MIN_SIZE) {
      setSizeByName(e.target.name as keyof CanvasSize, MIN_SIZE.toString())
    }
  }

  return (
    <Dialog open={open} onClose={onClose} headline="NEW CREATION">
      <div className={styles['form-wrapper']}>
        {Object.keys(size).map((item) => (
          <TextField
            type="number"
            key={item}
            name={item}
            label={item.toLocaleUpperCase()}
            value={size[item as keyof CanvasSize]}
            onInput={handleInput}
            onBlur={handleBlur}
            withUnit="PX"
            required
          />
        ))}
      </div>
      <Button className={styles.continue} onClick={() => onContinue(size)}>
        CONTINUE
      </Button>
    </Dialog>
  )
}
