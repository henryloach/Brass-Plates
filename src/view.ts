import { h, VNode } from 'snabbdom'
import hh from 'hyperscript-helpers'
import { Font, Model, Plate } from './model'
import { Message } from './messages'
import { fontMap, plateSizeX, plateSizeY, bevelSize, numColumns, jigSizeX, jigSizeY, numRows, bodyMargin } from './data'
import { getFontSizeToFit, getPlatePosition, sizeMultiplier } from './utils'

const { div, button, svg, input, select, option, span } = hh(h)

const unitCell = (index: number, dispatch: (message: Message) => void) => {
    const [x, y] = getPlatePosition(index, 'topLeft')

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
                click: () => dispatch(['select plate text', index])
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



const unitText = (index: number, plate: Plate) => {
    const [x, y] = getPlatePosition(index, 'center')
    const fontSize = getFontSizeToFit(plate) * sizeMultiplier(plate)
    const baseLineCorrection = fontSize * 0.35


    return h('text',
        {
            attrs: {
                x: `${x}mm`,
                y: `${y + baseLineCorrection}mm`,
                'text-anchor': 'middle',
                'dominant-baseline': 'auto',
                'font-size': `${fontSize}mm`,
                'font-family': fontMap[plate.font]['font-family'],
                'font-style': fontMap[plate.font]['font-style']
            }
        },
        plate.text
    )
}


const editFontInput = (model: Model, dispatch: (message: Message) => void): VNode | null => {
    if (model.selectedPlate === null) return null
    const [index, editOption] = model.selectedPlate
    if (editOption === 'text') return null
    const plate = model.plateList[index]
    let [x, y] = getPlatePosition(index, 'topLeft');
    [x, y] = [x + bodyMargin, y + bodyMargin]

    const fontInput = select(
        {
            style: {
                position: 'absolute',
                left: `${x + plateSizeX * 3 / 4}mm`,
                top: `${y}mm`,
                width: `${plateSizeX * 1 / 4}mm`,
                height: `${plateSizeY}mm`,
                'font-family': fontMap[plate.font]['font-family'],
                'font-style': fontMap[plate.font]['font-style']
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
            const name = fontName as Font
            return option(
                {
                    attrs: {
                        value: fontName,
                        selected: fontName === model.plateList[index].font
                    },
                    style: {
                        'font-family': fontMap[name]['font-family'],
                        'font-style': fontMap[name]['font-style']
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
        let [x, y] = getPlatePosition(index, 'topLeft');
        [x, y] = [x + bodyMargin + plateSizeX * 7 / 8, y + bodyMargin + plateSizeY / 4]

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

    let [x, y] = getPlatePosition(index, 'topLeft');
    [x, y] = [x + bodyMargin, y + bodyMargin]


    const fontSize = getFontSizeToFit(plate) * sizeMultiplier(plate)

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
                'font-family': fontMap[plate.font]['font-family'],
                'font-style': fontMap[plate.font]['font-style']
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
                return unitText(index, plate)
            }),
            ...Array.from({ length: numColumns * numRows }, (_, index) => {
                return unitCell(index, dispatch)
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