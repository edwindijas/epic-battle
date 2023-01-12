import { HandleWindowResize } from "./types";
import * as Pixi from  'pixi.js';

export class BaseObject {

    
    protected handleWindowResize: HandleWindowResize | undefined;
    protected __screenDimensions = { width: 0, height: 0 };
    
    public static getWindowDimensions = () => {
        const width = window.innerWidth,
            height = window.innerHeight;
        return {
            width,
            height
        }
    }

    protected scaleRatio = 1;

    constructor () {
        this.__bindEventHandlers();
        this.__screenDimensions = BaseObject.getWindowDimensions();
        this.__addEventListeners();
    }

    public destroy () {
        this.__destroy();
    }

    public __destroy () {
        this.__removeEventListeners()
    }

    protected playSound(src: string, volume = 1) {
        const audio = new Audio(src);
        audio.volume = volume
        audio.play();
    }

    private __handleWindowResize () {
        if (this.handleWindowResize) {
            this.handleWindowResize();
        }
    }

    
    private __addEventListeners () {
        window.addEventListener('resize', this.__handleWindowResize);
    }

    private __removeEventListeners () {
        window.removeEventListener('resize', this.__handleWindowResize);
    }

    protected preload = (...src: string[]) => {
        src.forEach((item) => {
            fetch(item);
        })
    }

    private __bindEventHandlers () {
        this.__handleWindowResize = this.__handleWindowResize.bind(this);
    }

    protected centerPivot (container: Pixi.DisplayObject, width: number, height: number) {
        container.pivot = {
            x: width / 2,
            y: height / 2
        }
    }

    
}