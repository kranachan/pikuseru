import { ColorScheme, ThemeOptions } from 'constants/theme'
import { atom } from 'jotai'
import { chestnut } from 'themes'

export const themeOptionsAtom = atom<ThemeOptions>({
  scheme: ColorScheme.Light,
  theme: chestnut,
})
