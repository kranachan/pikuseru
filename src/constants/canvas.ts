export interface CanvasSize {
  width: number
  height: number
}

export enum CanvasMode {
  Draw,
  Erase,
}

export interface CanvasAtom {
  isCreated: boolean
  isFullScreen: boolean
  size: CanvasSize
  mode: CanvasMode
}

export const DEFAULT_SIZE = 24
export const MIN_SIZE = 8

export const DEFAULT_CANVAS_ATOM = {
  isCreated: false,
  isFullScreen: false,
  size: {
    width: DEFAULT_SIZE,
    height: DEFAULT_SIZE,
  },
  mode: CanvasMode.Draw,
}
