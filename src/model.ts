import { createEmptyPlateArray } from "./utils"

export type Model = {
    plateList: Plate[],
    selectedPlateIndex: number | null
}

export const initModel: Model = {
    plateList: createEmptyPlateArray(),
    selectedPlateIndex: null
}

export type Plate = {
    text: String;
    font: Font;
}

type Font =
    | "Script"
    | "Classic Script"
    | "Itallic"
    | "Serif"
    | "Sans Serif"
    | "Handwritten"
