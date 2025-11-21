import { Model } from "./model"
import { Message } from "./messages"

export const app = (
    initModel: Model,
    view: (model: Model, dispatch: (message: Message) => void) => HTMLElement,
    update: (model: Model, message: Message) => Model,
    node: HTMLElement
) => {
    const dispatch = (message: Message): void => {
        model = update(model, message)
        const updatedView = view(model, dispatch)
        node.replaceChild(updatedView, currentView)
        currentView = updatedView
        console.log(JSON.stringify(message))
        console.log(JSON.stringify(model))
    }

    let model = initModel
    let currentView = view(model, dispatch)
    node.appendChild(currentView)
}