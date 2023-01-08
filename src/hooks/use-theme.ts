import { themeOptionsAtom } from 'atom/theme'
import { ColorScheme, Theme } from 'constants/theme'
import { setLocalStorage } from 'utils/localstorage'
import { useAtom } from 'jotai'

export const useTheme = () => {
  const [themeOptions, setThemeOptions] = useAtom(themeOptionsAtom)
  const isAutoScheme = themeOptions.scheme === ColorScheme.Auto
  const setTheme = (theme: Theme) => {
    setThemeOptions((prev) => ({ ...prev, theme }))
    setLocalStorage('themeOptions', { theme, scheme: themeOptions.scheme })
  }
  const setScheme = (scheme: ColorScheme) => {
    setThemeOptions((prev) => ({ ...prev, scheme }))
    setLocalStorage('themeOptions', { scheme, theme: themeOptions.theme })
  }
  return { ...themeOptions, setTheme, setScheme, isAutoScheme }
}
