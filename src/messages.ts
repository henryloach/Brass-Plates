import { Font } from "./model";

export type Message =
    | [ "select plate", number ]
    | [ "deselect plate", number ]
    | [ "edit plate text", number, string]
    | [ 'edit plate font', number, Font]
    