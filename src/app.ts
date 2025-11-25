import { Model } from "./model"
import { Message } from "./messages"
import { VNode, attributesModule, classModule, eventListenersModule, init, styleModule } from "snabbdom"

const patch = init([eventListenersModule, classModule, attributesModule, styleModule])

export const app = (
    initModel: Model,
    view: (model: Model, dispatch: (message: Message) => void) => VNode,
    update: (model: Model, message: Message) => Model,
    rootNode: HTMLElement
) => {
    const dispatch = (message: Message): void => {
        model = update(model, message)
        const updatedVNode = view(model, dispatch)
        domNode = patch(domNode, updatedVNode)
        currentVNode = updatedVNode
        console.log(JSON.stringify(message, null, 2))
        // console.log(JSON.stringify(model, null, 2))
    }

    let model = initModel
    let currentVNode = view(model, dispatch)
    let domNode = patch(rootNode, currentVNode)
}