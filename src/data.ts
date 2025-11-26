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
    "Script": "Cursiv",
    "Classic Script": "Dancing Script",
    "Italic": "Gentium Book Plus Italic",
    "Serif": "Merriweather",
    "Sans Serif": "Roboto",
    "Handwritten": "Caveat"
}

export const defaultFontSize = 6
export const maxWidth = plateSizeX - 16