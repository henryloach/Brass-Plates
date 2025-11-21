import { Plate } from "./model"

export const createEmptyPlateArray = (): Plate[] => {
    return Array.from({ length: 16 }, (value, index) => {
        return {
            text: "",
            font: "Script",
            selected: false
        }
    })
}