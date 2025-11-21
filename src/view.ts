import h from 'hyperscript'
import hh from 'hyperscript-helpers'
import { Model } from './model'
import { Message } from './messages'

const { div, button, svg, pre } = hh(h)

export const view = (model: Model, dispatch: (message: Message) => void): HTMLElement => {
    return pre(JSON.stringify(model, null, 2))
}