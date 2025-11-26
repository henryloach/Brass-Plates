import { createEmptyPlateArray } from "./utils"

export type Model = {
    plateList: Plate[],
    selectedPlate: [ number, EditOption ] | null
}

export const initModel: Model = {
    //plateList: createEmptyPlateArray(),
    plateList: [
        { text: 'Chris', font: 'Script' },
        { text: 'CHL', font: 'Handwritten' },
        { text: 'Farrar & Tanner', font: 'Script' },
        { text: 'Onion Bhaji', font: 'Handwritten' },
        { text: 'Chris', font: 'Script' },
        { text: 'CHL', font: 'Serif' },
        { text: 'Chris', font: 'Script' },
        { text: 'CHL', font: 'Italic' },
        { text: 'Chris', font: 'Script' },
        { text: 'CHL', font: 'Handwritten' },
        { text: 'Chris', font: 'Script' },
        { text: 'CHL', font: 'Classic Script' },
        { text: 'Chris', font: 'Script' },
        { text: 'CHL', font: 'Handwritten' },
        { text: 'Chris', font: 'Script' },
        { text: 'CHL', font: 'Italic' },
    ],
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