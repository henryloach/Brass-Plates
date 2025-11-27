export const plateSizeX = 80.75
export const plateSizeY = 16.35
export const bevelSize = 1.5

export const wallThickness = 5.0

export const numRows = 8
export const numColumns = 2

export const unitCellX = plateSizeX + wallThickness
export const unitCellY = plateSizeY + wallThickness

export const jigSizeX = unitCellX * numColumns
export const jigSizeY = unitCellY * numRows

export const bodyMargin = 2

export const fontMap = {
    'Script': { 'font-family': 'Cursiv', 'font-style': 'regular' },
    'Classic Script': { 'font-family': 'Dancing Script', 'font-style': 'regular' },
    'Italic': { 'font-family': 'Gentium Book Plus', 'font-style': 'italic' },
    'Serif': { 'font-family': 'Merriweather', 'font-style': 'regular' },
    'Sans Serif': { 'font-family': 'Roboto Medium', 'font-style': 'regular' },
    'Handwritten': { 'font-family': 'Caveat', 'font-style': 'regular' },
}

export const defaultFontSize = 6
export const maxWidth = plateSizeX - 14