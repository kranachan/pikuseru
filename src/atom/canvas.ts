import { CanvasAtom, DEFAULT_CANVAS_ATOM } from 'constants/canvas'
import { atomWithImmer } from 'jotai-immer'

export const canvasAtom = atomWithImmer<CanvasAtom>(DEFAULT_CANVAS_ATOM)
