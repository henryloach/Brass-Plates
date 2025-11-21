import h from 'hyperscript'
import hh from 'hyperscript-helpers'

const { div, button } = hh(h)

type Model = {
    count: number
}

type Message = "plus" | "minus"

const initModel: Model = {
    count: 0
}

const view = (model: Model, dispatch: Function): HTMLElement => {
    return div([
        div(`Count: ${model.count}`),
        button('+', { onclick: () => dispatch('plus') }),
        button('-', { onclick: () => dispatch('minus') })
    ])
}

const update = (model: Model, message: Message): Model => {
    switch (message) {
        case "plus":
            return { ...model, count: model.count + 1 }
        case "minus":
            return { ...model, count: model.count - 1 }
    }
}

// impure code below

((
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
    }

    let model = initModel
    let currentView = view(model, dispatch)
    node.appendChild(currentView)
})(initModel, view, update, document.body)
