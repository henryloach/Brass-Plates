import { h, VNode } from 'snabbdom'
import hh from 'hyperscript-helpers'
import { Font, Model, Plate } from './model'
import { Message } from './messages'
import { fontMap, plateSizeX, plateSizeY, unitCellX, unitCellY, wallThickness, bevelSize, numColumns, jigSizeX, jigSizeY, numRows } from './data'
import { getPlatePosition } from './utils'

const { div, button, svg, pre, form, input, select, option, span } = hh(h)

const unitCell = (row: number, column: number, dispatch: (message: Message) => void) => {
    const x = column * unitCellX + wallThickness / 2
    const y = row * unitCellY + wallThickness / 2
    return [
        h('rect', {
            attrs: {
                x: `${x}mm`,
                y: `${y}mm`,
                width: `${plateSizeX}mm`,
                height: `${plateSizeY}mm`,
                stroke: 'gold',
                fill: 'transparent'
            },
            on: {
                click: () => dispatch(['select plate text', row * numColumns + column])
            }
        }),
        h('rect', {
            attrs: {
                x: `${x + bevelSize}mm`,
                y: `${y + bevelSize}mm`,
                width: `${plateSizeX - 2 * bevelSize}mm`,
                height: `${plateSizeY - 2 * bevelSize}mm`,
                stroke: 'gold',
                fill: 'none'
            }
        })
    ]
}

const border = h('rect', {
    attrs: {
        x: `0mm`,
        y: `0mm`,
        width: `${jigSizeX}mm`,
        height: `${jigSizeY}mm`,
        stroke: 'gold',
        fill: 'none'
    }
})

const getFontSizeToFit = (text: string, defaultSize: number, maxWidth: number, fontFamily: string): number => {
    maxWidth = maxWidth * 3.78 // mm to px
    const svgNS = "http://www.w3.org/2000/svg"
    const svg = document.createElementNS(svgNS, "svg")
    svg.style.position = "absolute"
    svg.style.visibility = "hidden"
    document.body.appendChild(svg)

    const tempText = document.createElementNS(svgNS, "text")
    tempText.setAttribute("font-family", fontFamily)
    tempText.setAttribute("font-size", `${defaultSize}mm`)
    tempText.textContent = text
    svg.appendChild(tempText)

    const textWidth = tempText.getComputedTextLength()
    document.body.removeChild(svg)

    if (textWidth <= maxWidth) return defaultSize
    return defaultSize * (maxWidth / textWidth)
}

const unitText = (row: number, column: number, plate: Plate) => {
    const x = column * unitCellX + wallThickness / 2 + plateSizeX / 2
    const y = row * unitCellY + wallThickness / 2 + plateSizeY / 2

    const defaultFontSize = 6.5
    const maxWidth = plateSizeX - 16 // mm padding
    const fontSize = getFontSizeToFit(plate.text, defaultFontSize, maxWidth, fontMap[plate.font])

    return h('text',
        {
            attrs: {
                x: `${x}mm`,
                y: `${y}mm`,
                'text-anchor': 'middle',
                'dominant-baseline': 'central',
                'font-size': `${fontSize}mm`,
                'font-family': fontMap[plate.font]
            }
        },
        plate.text
    )
}


const editFontInput = (model: Model, dispatch: (message: Message) => void): VNode | null => {
    if (model.selectedPlate === null) return null
    const [index, editOption] = model.selectedPlate
    if (editOption === 'text') return null

    const bodyMargin = 2
    const row = Math.floor(index / 2)
    const column = index % 2
    const x = column * unitCellX + wallThickness / 2 + bodyMargin
    const y = row * unitCellY + wallThickness / 2 + bodyMargin

    const fontInput = select(
        {
            attrs: {
                name: 'Font'
            },
            style: {
                position: 'absolute',
                left: `${x + plateSizeX * 3 / 4}mm`,
                top: `${y}mm`,
                width: `${plateSizeX * 1 / 4}mm`,
                height: `${plateSizeY}mm`
            },
            hook: {
                insert: (vnode: any) => {
                    const selectElement = (vnode.elm as HTMLInputElement)
                    selectElement.focus()
                }
            },
            on: {
                change: (e: any) => dispatch(['edit plate font', index, e.target.value]),
                blur: () => dispatch(['deselect plate', index])
            }
        },
        Object.keys(fontMap).map(fontName => {
            return option(
                {
                    attrs: {
                        value: fontName
                    }
                },
                fontName
            )
        })
    )
    return fontInput
}

const fontSelectArrows = (model: Model, dispatch: (message: Message) => void): VNode => {
    const bodyMargin = 2

    const arrow = (index: number) => {

        if (model.selectedPlate !== null && index === model.selectedPlate[0]) return null
        const row = Math.floor(index / 2)
        const column = index % 2
        const x = column * unitCellX + wallThickness / 2 + bodyMargin + plateSizeX * 7 / 8
        const y = row * unitCellY + wallThickness / 2 + bodyMargin + plateSizeY / 4
        return span(
            {
                attrs: {
                    value: model.plateList[index].font
                },
                style: {
                    position: 'absolute',
                    left: `${x}mm`,
                    top: `${y}mm`,
                    'font-size': '6mm',
                    color: 'gold',
                    opacity: 0.5
                },
                on: {
                    pointerdown: (e: PointerEvent) => {
                        e.preventDefault()
                        dispatch(['select plate font', index])
                    }
                }
            },
            '▼'
        )
    }

    return div(
        Array.from({ length: numColumns * numRows }, (_, index) => {
            return arrow(index)
        })
    )
}

const editTextInput = (model: Model, dispatch: (message: Message) => void): VNode | null => {

    if (model.selectedPlate === null) return null
    const [index, editOption] = model.selectedPlate
    if (editOption === 'font') return null
    const plate = model.plateList[index]

    const bodyMargin = 2
    const row = Math.floor(index / 2)
    const column = index % 2
    const x = column * unitCellX + wallThickness / 2 + bodyMargin
    const y = row * unitCellY + wallThickness / 2 + bodyMargin

    const defaultFontSize = 6.5
    const maxWidth = plateSizeX - 16 // mm padding
    const fontSize = getFontSizeToFit(plate.text, defaultFontSize, maxWidth, fontMap[plate.font])

    const textInput = input(
        {
            attrs: {
                type: 'text',
                value: model.plateList[index].text,
            },
            style: {
                padding: 0,
                border: 0,
                position: 'absolute',
                left: `${x}mm`,
                top: `${y}mm`,
                width: `${plateSizeX}mm`,
                height: `${plateSizeY}mm`,
                'text-align': 'center',
                'font-size': `${fontSize}mm`,
                'font-family': fontMap[plate.font]
            },
            hook: {
                insert: (vnode: any) => {
                    const inputElement = (vnode.elm as HTMLInputElement)
                    inputElement.focus()
                    inputElement.select()
                }
            },
            on: {
                input: (e: any) => dispatch(['edit plate text', index, e.target.value]),
                blur: () => dispatch(['deselect plate', index]),
                keydown: (e: KeyboardEvent) => {
                    if (e.key === 'Escape' || e.key === 'Enter') dispatch(['deselect plate', index])
                }
            },
        }
    )


    return textInput
}

const renderSvg = (model: Model, dispatch: (message: Message) => void): VNode => {
    return svg(
        {
            attrs: {
                width: `${jigSizeX}mm`,
                height: `${jigSizeY}mm`,
            }
        },
        [
            border,
            ...model.plateList.map((plate, index) => {
                const row = Math.floor(index / 2)
                const column = index % 2
                return unitText(row, column, plate)
            }),
            ...Array.from({ length: numColumns * numRows }, (_, index) => {
                return unitCell(Math.floor(index / 2), index % 2, dispatch)
            }).flat()
        ]
    )
}

const downloadButton = button(
    {
        on: {
            click: () => downloadSvg()
        }
    },
    "Download SVG"
)

const downloadSvg = () => {
    const svgElement = document.querySelector("svg")
    if (!svgElement) return

    // Serialize SVG
    const serializer = new XMLSerializer()
    const source = serializer.serializeToString(svgElement)

    // Add XML header (optional but good for proper SVG files)
    const svgBlob = new Blob(
        ['<?xml version="1.0" standalone="no"?>\n' + source],
        { type: "image/svg+xml;charset=utf-8" }
    )

    const url = URL.createObjectURL(svgBlob)

    // Trigger download
    const link = document.createElement("a")
    link.href = url
    link.download = "plates.svg"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(url)
}


export const view = (model: Model, dispatch: (message: Message) => void) => {
    return div([
        renderSvg(model, dispatch),
        fontSelectArrows(model, dispatch),
        editTextInput(model, dispatch),
        editFontInput(model, dispatch),
        downloadButton
    ])
}