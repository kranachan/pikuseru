export interface ColorTokens {
  primary: string
  background: string
}

export enum ColorScheme {
  Light = 'light',
  Dark = 'dark',
  Auto = 'auto',
}

export type Theme = Record<ColorScheme.Light | ColorScheme.Dark, ColorTokens>
