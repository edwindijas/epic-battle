import { DisplayObject } from "pixi.js";
import { GameObject } from "./types";

const objects: GameObject[] = [];



const add = (gameObject: DisplayObject) => {

}

const get = (): GameObject[] => objects;




export default {
    get,
    add
}