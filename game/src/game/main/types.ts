import { Bug } from "game/models/bugs/bug"
import { GameData } from "models/Stat";
import { type } from "os";
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

export type AppEventType = 'start' | 'pause' | 'restart' | 'resume' | 'over' | 'datachanged'

export interface AppEventGeneral {
    event: Exclude<AppEventType, 'datachanged'>,
    callback: () => void
}

export interface AppEventStatChange {
    event: 'datachanged',
    callback: (props: GameData) => void
}

export type AppEventListener = AppEventGeneral | AppEventStatChange

