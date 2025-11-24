import { app } from "./app"
import { initModel } from "./model"
import { view } from "./view"
import { update } from "./update"

const root = document.getElementById('app') as HTMLElement

app(initModel, view, update, root)