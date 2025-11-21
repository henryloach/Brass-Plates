import { createEmptyPlateArray } from "./utils"

export type Model = {
    plateList: Plate[]
}

export const initModel: Model = {
    plateList: createEmptyPlateArray()
}

export type Plate = {
    text: String;
    font: Font;
    selected: boolean
}

type Font =
    | "Script"
    | "Classic Script"
    | "Itallic"
    | "Serif"
    | "Sans Serif"
    | "Handwritten"
