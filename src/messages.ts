import { Font } from "./model";

export type Message =
    | ['select plate text', number]
    | ['select plate font', number]
    | ["deselect plate", number]
    | ["edit plate text", number, string]
    | ['edit plate font', number, Font]
    | ['toggle calibrate', null]
