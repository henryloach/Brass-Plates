import { Font, Model } from "./model"
import { Message } from "./messages"

export const update = (model: Model, message: Message): Model => {
    const [messageType, ...rest] = message

    switch (messageType) {
        case "select plate": {
            const [index] = rest as [number]
            return { ...model, selectedPlateIndex: index }
        }
        case "deselect plate": {
            return { ...model, selectedPlateIndex: null }
        }
        case "edit plate text": {
            const [targetIndex, text] = rest as [number, string]
            const newPlateList = model.plateList.map((plate, index) =>
                index === targetIndex ? { ...plate, text } : plate
            )
            return { ...model, plateList: newPlateList }
        }
        case 'edit plate font': {
            const [targetIndex, font] = rest as [number, Font]
            const newPlateList = model.plateList.map((plate, index) =>
                index === targetIndex ? { ...plate, font } : plate
            )
            return { ...model, plateList: newPlateList }
        }
    }
}