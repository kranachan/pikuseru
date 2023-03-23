import { Dialog } from 'components/dialog'
import { Icon } from 'components/icon'
import { Switch } from 'components/switch'
import { ColorScheme, Theme } from 'constants/theme'
import { useTheme } from 'hooks/use-theme'
import { FC } from 'react'
import { ajisai, chestnut, daphne, maackia, systemScheme } from 'themes'
import styles from './index.module.css'

export type ThemeDialogProps = {
  open: boolean
  onClose: () => void
}

export const ThemeDialog: FC<ThemeDialogProps> = (props) => {
  const { open, onClose } = props
  const {
    isAutoScheme,
    scheme: storedScheme,
    theme: storedTheme,
    setScheme,
    setTheme,
  } = useTheme()
  const isDarkMode = storedScheme === ColorScheme.Dark

  const getPrimaryColor = (theme: Theme) => {
    const appliedScheme = isAutoScheme
      ? systemScheme
      : (storedScheme as ColorScheme.Light | ColorScheme.Dark)

    return theme[appliedScheme].primary
  }

  const themes = [chestnut, daphne, ajisai, maackia]

  return (
    <Dialog open={open} onClose={onClose} headline="THEME OPTIONS">
      <div className={styles['theme-header']}>
        <Icon name="PaintBucket" size={32} />
        <b>COLORS</b>
        <Switch
          className={'ml-auto'}
          onClick={() => {
            setScheme(isDarkMode ? ColorScheme.Light : ColorScheme.Dark)
          }}
          isOn={isDarkMode}
          onIcon="Moon"
          offIcon="Sun"
        />
      </div>
      <div className={styles['theme-colors']}>
        {themes.map((theme, index) => {
          const isCurrentTheme =
            getPrimaryColor(theme) === getPrimaryColor(storedTheme)

          return (
            <div
              className={styles['theme-color-self']}
              style={{ backgroundColor: getPrimaryColor(theme) }}
              onClick={() => setTheme(theme)}
              key={index}
            >
              {isCurrentTheme && (
                <Icon
                  name="Verified"
                  className={styles['theme-color-selected-icon']}
                  size={32}
                />
              )}
            </div>
          )
        })}
      </div>
    </Dialog>
  )
}
