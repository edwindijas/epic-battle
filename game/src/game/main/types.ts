import { Bug } from "game/models/bugs/bug"
import { DisplayObject } from "pixi.js"

export interface GameObject {
    item: DisplayObject
    redraw: () => void
}

export interface Rectangle {
    width: number;
    height: number;
    x: number;
    y: number;
}

export type bugs  = Map<string, Bug>