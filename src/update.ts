import { Model } from "./model"
import { Message } from "./messages"

export const update = (model: Model, message: Message): Model => {
    switch (message) {
        case "plus":
            return { ...model, count: model.count + 1 }
        case "minus":
            return { ...model, count: model.count - 1 }
    }
}