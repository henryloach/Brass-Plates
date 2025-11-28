import { Font, FontDetails } from "./model"

export const plateSizeX = 80.75
export const plateSizeY = 16.35
export const bevelSize = 1.5

export const wallThickness = 4.904 // 5 from SCAD

export const numRows = 8
export const numColumns = 2

export const unitCellX = plateSizeX + wallThickness
export const unitCellY = plateSizeY + wallThickness

export const jigSizeX = unitCellX * numColumns
export const jigSizeY = unitCellY * numRows

export const bodyMargin = 2

export const fontMap: Record<Font, FontDetails> = {
    'Script': { 'font-family': 'Monotype Corsiva Regular', 'font-style': 'regular', 'defaultSize': 7 },
    'Classic Script': { 'font-family': 'Dancing Script', 'font-style': 'regular', 'defaultSize': 7 },
    'Italic': { 'font-family': 'Gentium Book Plus', 'font-style': 'italic', 'defaultSize': 6 },
    'Serif': { 'font-family': 'Merriweather', 'font-style': 'regular', 'defaultSize': 5 },
    'Sans Serif': { 'font-family': 'Roboto Medium', 'font-style': 'regular', 'defaultSize': 5 },
    'Handwritten': { 'font-family': 'Caveat', 'font-style': 'regular', 'defaultSize': 7.5 },
}

export const maxWidth = plateSizeX - 14