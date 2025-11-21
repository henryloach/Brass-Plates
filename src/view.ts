import h from 'hyperscript'
import hh from 'hyperscript-helpers'
import { Model } from './model'
import { Message } from './messages'

const { div, button, svg } = hh(h)

export const view = (model: Model, dispatch: (message: Message) => void): HTMLElement => {
    return div([
        div(`Count: ${model.count}`),
        button('+', { onclick: () => dispatch('plus') }),
        button('-', { onclick: () => dispatch('minus') })
    ])
}