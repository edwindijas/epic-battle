import * as Pixi from  'pixi.js'
import { BaseObject } from "game/library/base"
import { Application } from 'game/main/application';

export class ApplicationScene extends BaseObject {
    private container: Pixi.Container = {} as Pixi.Container;
    public static borderWidth = 0;
    public static marginTop = 100;
    public static Margin = 0;

    protected screenDimensions = {
        width: 0,
        height: 0
    }

    public static getSquareLength = () => {
        const width = window.innerWidth,
            height = window.innerHeight;

        let length = width < height ? width : height;
            length = length > 820 ? 820 : length;
            return length;

    }

    public static getScale = (squareLength: number) => {
        return squareLength / 820;
    }

    public static getAdjustMousePos = (squareLength: number, mouseX: number, mouseY: number) => {
        const {innerWidth, innerHeight} = window,
            marginLeft = (innerWidth - squareLength) / 2,
            marginTop = (innerHeight - squareLength) / 2,
            adjustX = mouseX - marginLeft,
            adjustY = mouseY - marginTop
        return {
            adjustX,
            adjustY
        }

    }

    public static getBoundaries = (squareLength: number): {top: number, left: number, bottom: number, right: number} => {
        const borderWidth = ApplicationScene.borderWidth;
        const top = borderWidth,
            left = borderWidth,
            bottom = squareLength - (borderWidth),
            right = squareLength - (borderWidth);

        return {
            top,
            bottom,
            left,
            right
        }

    }

    public static getWindowBoundaries = () => {
        const {innerWidth, innerHeight} = window;
    }

    public static getCenterPos = (squareLength: number): {centerX: number, centerY: number} => {
        const center = squareLength / 2
        return {
            centerX: center,
            centerY: center
        }
    }

    public static getWindowCenterPos = () => {
        const {innerWidth, innerHeight} = window;
        return {
            centerX: innerWidth / 2,
            centerY: innerHeight / 2
        }
    }


    constructor (private app: Application, private pixiApp: Pixi.Application) {
        super();
        this.render();
        this.screenDimensions = ApplicationScene.getWindowDimensions()
    }

    drawBoundaries () {
        const container = this.container;
        const graphics = new Pixi.Graphics();
            graphics.lineStyle(ApplicationScene.borderWidth, 0xfffffff)
        const {left, right, bottom, top} = ApplicationScene.getBoundaries(this.app.getSquareLength());

        const height = bottom - top + ApplicationScene.borderWidth * 2;
        const width = right - left + (ApplicationScene.borderWidth * 2)

        graphics.drawRect(left - ApplicationScene.borderWidth, top - ApplicationScene.borderWidth, width, height);

        container.addChild(graphics);
    }

    public addChild (item: Pixi.DisplayObject) {
        this.container.addChild(item);
    }
    
    render () {
        this.container = new Pixi.Container();
        this.drawBoundaries()
        this.pixiApp.stage.addChild(this.container);
        
    }

    protected handleWindowResize = () => {   
    }

} 