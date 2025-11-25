import { createEmptyPlateArray } from "./utils"

export type Model = {
    plateList: Plate[],
    selectedPlateIndex: number | null
}

export const initModel: Model = {
    //plateList: createEmptyPlateArray(),
    plateList: [
        { text: 'Chris', font: 'Script' },
        { text: 'CHL', font: 'Handwritten' },
        { text: 'Farrar & Tanner', font: 'Script' },
        { text: 'Onion Bhaji', font: 'Handwritten' },
        { text: 'Chris', font: 'Script' },
        { text: 'CHL', font: 'Handwritten' },
        { text: 'Chris', font: 'Script' },
        { text: 'CHL', font: 'Handwritten' },
        { text: 'Chris', font: 'Script' },
        { text: 'CHL', font: 'Handwritten' },
        { text: 'Chris', font: 'Script' },
        { text: 'CHL', font: 'Handwritten' },
        { text: 'Chris', font: 'Script' },
        { text: 'CHL', font: 'Handwritten' },
        { text: 'Chris', font: 'Script' },
        { text: 'CHL', font: 'Handwritten' },
    ],
    selectedPlateIndex: null
}

export type Plate = {
    text: string;
    font: Font;
}

type Font =
    | "Script"
    | "Classic Script"
    | "Itallic"
    | "Serif"
    | "Sans Serif"
    | "Handwritten"
