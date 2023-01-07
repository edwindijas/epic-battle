import { DisplayObject } from "pixi.js"

export interface GameObject {
    item: DisplayObject
    redraw: () => void
}