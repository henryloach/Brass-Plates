import { h, VNode } from 'snabbdom'
import hh from 'hyperscript-helpers'
import { Font, Model, Plate } from './model'
import { Message } from './messages'
import { fontMap, plateSizeX, plateSizeY, unitCellX, unitCellY, wallThickness, bevelSize, numColumns, jigSizeX, jigSizeY, numRows } from './data'
import { getPlatePosition } from './utils'

const { div, button, svg, pre, form, input, select, option } = hh(h)

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
                click: () => dispatch(['select plate', row * numColumns + column])
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

const unitText = (row: number, column: number, plate: Plate) => {
    const x = column * unitCellX + wallThickness / 2 + plateSizeX / 2
    const y = row * unitCellY + wallThickness / 2 + plateSizeY / 2
    return h('text',
        {
            attrs: {
                x: `${x}mm`,
                y: `${y}mm`,
                'text-anchor': 'middle',
                'dominant-baseline': 'central',
                'font-size': '7mm',
                'font-family': fontMap[plate.font]
            }
        },
        plate.text
    )
}

const editInput = (model: Model, dispatch: (message: Message) => void) => {

    if (model.selectedPlateIndex === null) return null
    const index = model.selectedPlateIndex

    const bodyMargin = 2
    const row = Math.floor(index / 2)
    const column = index % 2
    const x = column * unitCellX + wallThickness / 2 + bodyMargin
    const y = row * unitCellY + wallThickness / 2 + bodyMargin

    const textInput = input(
        {
            attrs: {
                type: 'text',
                value: model.plateList[index].text,
            },
            style: {
                position: 'absolute',
                left: `${x}mm`,
                top: `${y}mm`,
                width: `${plateSizeX * 3 / 4}mm`,
                height: `${plateSizeY}mm`,
                'text-align': 'center'
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
                keydown: (e: KeyboardEvent) => {
                    if (e.key === 'Escape' || e.key === 'Enter') dispatch(['deselect plate', index])
                }
            },
        }
    )

    const fontInput = select(
        {
            attrs: {
                value: model.plateList[index].font
            },
            style: {
                position: 'absolute',
                left: `${x + plateSizeX * 3 / 4}mm`,
                top: `${y}mm`,
                width: `${plateSizeX * 1 / 4}mm`,
                height: `${plateSizeY}mm`
            },
            on: {
                change: (e: any) => dispatch(['edit plate font', index, e.target.value])
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
    return div(
        {   
            attrs: {
                tabindex: 0
            },
            on: {
                blur: () => dispatch(['deselect plate', index])
            }
        },
        [textInput, fontInput])
}

export const view = (model: Model, dispatch: (message: Message) => void) => {
    return div([
        svg(
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
        ),
        editInput(model, dispatch),
        pre(JSON.stringify(model, null, 2))
    ])
}