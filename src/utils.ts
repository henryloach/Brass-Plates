import { fontMap, maxWidth, numColumns, plateSizeX, plateSizeY, unitCellX, unitCellY, wallThickness } from "./data"
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
    const defaultFontSize = fontMap[font].defaultSize
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

export const sizeMultiplier = (plate: Plate): number => {
    const { text } = plate
    let initialMultiplier = 1

    if (uppercaseFraction(text) > 0.8) initialMultiplier *= 0.95
    else if (uppercaseFraction(text) > 0.5) initialMultiplier *= 0.9

    if (alphanumericLength(text) <= 2) initialMultiplier *= 1.25
    else if (alphanumericLength(text) <= 3) initialMultiplier *= 1.15
    else if (alphanumericLength(text) <= 4) initialMultiplier *= 1.1
    else if (alphanumericLength(text) <= 5) initialMultiplier *= 1.05

    return initialMultiplier

}

const uppercaseFraction = (input: string): number => {
    let total = 0
    let upper = 0

    for (const ch of input) {
        if (/^[A-Za-z0-9]$/.test(ch)) {
            total++

            // Digits count as uppercase
            if (/[A-Z0-9]/.test(ch)) {
                upper++
            }
        }
    }

    return total === 0 ? 0 : upper / total
}

const alphanumericLength = (input: string): number => {
    let count = 0

    for (const ch of input) {
        if (/^[A-Za-z0-9]$/.test(ch)) {
            count++
        }
    }

    return count
}