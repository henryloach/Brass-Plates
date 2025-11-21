import h from 'hyperscript'
import hh from 'hyperscript-helpers'
import { Model } from './model'
import { Message } from './messages'
import { Plate } from './model'
import { plateWidth, plateHeight, fontMap } from './data'
import { getPlatePosition } from './utils'

const { div, button, svg, pre } = hh(h)

export const view = (model: Model, dispatch: any) => {
    const plates = model.plateList.map((plate, i) =>
        div({ style: "position:relative;" }, [
            plateView(plate, i, dispatch),
            renderEditingInput(model, plate, i, dispatch)
        ])
    )
    return div(plates)
}

const plateView = (plate: Plate, index: number, dispatch: (message: Message) => void) => {
    //if (plate.selected) return null
    const { x, y } = getPlatePosition(index)

    return svg({
        width: plateWidth, 
        height: plateHeight,
        style: `
            position:absolute;
            left:${x}px;
            top:${y}px;
            cursor:pointer;
        `,
        onclick: () => dispatch(["select plate", index])
    }, [
        h("rect", {
            x: 0, y: 0,
            width: plateWidth, 
            height: plateHeight,
            stroke: "#888",     // not black, not engraved
            fill: "none",
            "stroke-width": 1
        }),
        h("text", {
            x: plateWidth / 2,
            y: plateHeight / 2,
            "dominant-baseline": "middle",
            "text-anchor": "middle",
            "font-family": fontMap[plate.font],
            "font-size": "12px",
            fill: "black"      // engraving color
        }, plate.text)
    ])
}

const renderEditingInput = (
    model: Model,
    plate: Plate,
    index: number,
    dispatch: (message: Message) => void
) => {
    if (model.selectedPlateIndex !== index) return null

    const { x, y } = getPlatePosition(index)

    return h("form", {
        style: `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            margin: 0;
        `,
        onsubmit: (e: Event) => {
            e.preventDefault(); // Prevent page reload
            dispatch(["deselect plate", index])
        }
    }, [
        h("input", {
            type: "text",
            value: plate.text,
            autofocus: true,
            style: `
                width: ${plateWidth}px;
                height: ${plateHeight}px;
                font-size: 16px;
            `,
            oninput: (e: any) =>
                dispatch(["edit plate text", index, e.target.value]),
            onkeydown: (e: KeyboardEvent) => {
                if (e.key === "Escape") {
                    dispatch(["deselect plate", index]);
                }
            }
        })
    ])
}