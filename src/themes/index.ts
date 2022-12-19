import { ColorScheme, Theme } from 'constants/theme'

export const hex2rgb = (hexColor: string) => {
  if (!hexColor.startsWith('#')) {
    return '255 255 255'
  }

  const arrayedHexColor = hexColor.split('')
  arrayedHexColor.shift()
  const pureHex = arrayedHexColor.join('')
  const bigint = parseInt(pureHex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return [r, g, b].join(' ')
}

export const setColor2PropertyByHex = (
  name: string,
  hexColor: string,
): void => {
  document.documentElement.style.setProperty(
    `--colors-${name}`,
    hex2rgb(hexColor),
  )
}

export const applyTheme = (
  theme: Theme,
  scheme: ColorScheme.Light | ColorScheme.Dark,
) => {
  Object.entries(theme[scheme]).forEach(([propertyName, hexColor]) => {
    setColor2PropertyByHex(propertyName, hexColor)
  })
}
