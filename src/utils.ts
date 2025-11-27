import { defaultFontSize, fontMap, maxWidth, numColumns, plateSizeX, plateSizeY, unitCellX, unitCellY, wallThickness } from "./data"
import { Plate } from "./model"

export const createEmptyPlateArray = (): Plate[] => {
    return Array.from({ length: 16 }, (value, index) => {
        return {
            text: "",
            font: "Script",
        }
    })
}

export const getPlatePosition = (index: number, anchor: 'topLeft' | 'center'): [x: number, y: number] => {
    const [row, column] = getRowAndColumn(index)

    let x = column * unitCellX + wallThickness / 2
    let y = row * unitCellY + wallThickness / 2

    if (anchor === 'center') [x, y] = [x + plateSizeX / 2, y + plateSizeY / 2]

    return [x, y]
}

export const getRowAndColumn = (index: number): [number, number] => {
    return [Math.floor(index / numColumns), index % numColumns]
}

export const getFontSizeToFit = (plate: Plate): number => {
    const { text, font } = plate
    const maxWidthPx = maxWidth * 3.78 // mm to px
    const svgNS = "http://www.w3.org/2000/svg"
    const svg = document.createElementNS(svgNS, "svg")
    svg.style.position = "absolute"
    svg.style.visibility = "hidden"
    document.body.appendChild(svg)

    const tempText = document.createElementNS(svgNS, "text")
    tempText.setAttribute("font-family", fontMap[font]["font-family"])
    tempText.setAttribute("font-style", fontMap[font]["font-style"])

    tempText.setAttribute("font-size", `${defaultFontSize}mm`)
    tempText.textContent = text
    svg.appendChild(tempText)

    const textWidth = tempText.getComputedTextLength()
    document.body.removeChild(svg)

    if (textWidth <= maxWidthPx) return defaultFontSize
    return defaultFontSize * (maxWidthPx / textWidth)
}