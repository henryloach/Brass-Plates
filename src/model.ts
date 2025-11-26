import { createEmptyPlateArray } from "./utils"

export type Model = {
    plateList: Plate[],
    selectedPlate: [ number, EditOption ] | null
}

export const initModel: Model = {
    plateList: createEmptyPlateArray(),
    selectedPlate: null
}

export type Plate = {
    text: string;
    font: Font;
}

export type Font =
    | "Script"
    | "Classic Script"
    | "Italic"
    | "Serif"
    | "Sans Serif"
    | "Handwritten"

type EditOption = 'font' | 'text'