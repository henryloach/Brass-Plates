import { Plate } from "./model"

export const createEmptyPlateArray = (): Plate[] => {
    return Array.from({ length: 16 }, (value, index) => {
        return {
            text: "",
            font: "Script",
        }
    })
}

export const getPlatePosition = (index: number, cols = 2, mm = 4): { x: number; y: number } => {
    const row = Math.floor(index / cols);
    const col = index % cols;

    return {
        x: col * 80 * mm,
        y: row * 14 * mm,
    }
}
