import * as Pixi from  'pixi.js'
import { BaseObject } from "game/library/base"
import { Application } from 'game/main/application';


export class ApplicationScene extends BaseObject {
    private container: Pixi.Container = {} as Pixi.Container;
    public static borderWidth = 2;

    public static getSquareLength = () => {
        const width = window.innerWidth,
            height = window.innerHeight;
            return width <  height ? width : height;
    }

    public static getBoundaries = (): {top: number, left: number, bottom: number, right: number} => {
        
        const squareLength = this.getSquareLength(),
            width = window.innerWidth,
            height = window.innerHeight,
            top = ((height - squareLength) / 2) + this.borderWidth,
            bottom = height - top - this.borderWidth,
            left  = ((width - squareLength) / 2) + this.borderWidth,
            right = window.innerWidth - left - this.borderWidth;

        return {
            top,
            bottom,
            left,
            right
        }

    }

    public static getCenterPos = (): {centerX: number, centerY: number} => {
        return {
            centerX: window.innerWidth / 2,
            centerY: window.innerHeight / 2
        }
    }


    constructor (private app: Application, private pixiApp: Pixi.Application) {
        super();
        
        this.render();
    }

    drawBoundaries () {
        const container = this.container;
        const graphics = new Pixi.Graphics();
            graphics.lineStyle(ApplicationScene.borderWidth, 0x568045)
        const {left, right, bottom, top} = ApplicationScene.getBoundaries();

        const height = bottom - top + ApplicationScene.borderWidth * 2;
        const width = right - left + (ApplicationScene.borderWidth * 2)

        graphics.drawRect(left - ApplicationScene.borderWidth, top - ApplicationScene.borderWidth, width, height);

        container.addChild(graphics);

    }

    render () {
        this.container = new Pixi.Container();
        this.pixiApp.stage.addChild(this.container);
        this.drawBoundaries()
    }

} 