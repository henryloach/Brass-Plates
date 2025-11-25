import { h, VNode } from 'snabbdom'
import hh from 'hyperscript-helpers'
import { Model, Plate } from './model'
import { Message } from './messages'
import { plateWidth, plateHeight, fontMap } from './data'
import { getPlatePosition } from './utils'

const { div, button, svg, pre, form } = hh(h)

const plateSizeX = 80.75
const plateSizeY = 16.35
const wallThickness = 5.0

const numRows = 8
const numColumns = 2

const unitCellX = plateSizeX + wallThickness
const unitCellY = plateSizeY + wallThickness

const jigSizeX = unitCellX * numColumns
const jigSizeY = unitCellY * numRows

const unitCell = (row: number, column: number) => {
    const x = column * unitCellX + wallThickness / 2
    const y = row * unitCellY + wallThickness / 2
    return h('rect', {
        attrs: {
            x: `${x}mm`,
            y: `${y}mm`,
            width: `${plateSizeX}mm`,
            height: `${plateSizeY}mm`,
            stroke: 'gold',
            fill: 'none'
        }
    })
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

const unitText = (row: number, column: number, text: string) => {
    const x = column * unitCellX + wallThickness / 2 + plateSizeX / 2
    const y = row * unitCellY + wallThickness / 2 + plateSizeY / 2
    return h('text',
        {
            attrs: {
                x: `${x}mm`,
                y: `${y}mm`,
                'text-anchor': 'middle',
                'dominant-baseline': 'central',
                'font-size': '10mm'
            }
        },
        text   // children go here
    )
}

export const view = (model: Model, dispatch: any) => {
    return h('svg',
        {
            attrs: {
                width: `${jigSizeX}mm`,
                height: `${jigSizeY}mm`,
            }
        },
        [
            border,
            unitText(0,0,'Test'),
            unitText(7,1,'Chris'),
            ...Array.from({ length: numColumns * numRows }, (v, i) => unitCell(Math.floor(i / 2), i % 2))
        ]
    )
}