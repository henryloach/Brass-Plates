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
    }

    let model = initModel
    let currentVNode = view(model, dispatch)
    let domNode = patch(rootNode, currentVNode)
}