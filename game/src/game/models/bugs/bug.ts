import { BaseObject } from "game/library/base";
import { Application } from "game/main/application";
import imgBug from 'game/assets/models/bug/bug.png'
import imgBug2 from 'game/assets/models/bug/bug-2.png'
import * as Pixi from 'pixi.js'
import { ApplicationScene } from "game/scene/scene";
import { Rectangle } from "game/main/types";
import { BugsHandler } from "game/main/bugsHandler";
import produce from "immer";

export class Bug extends BaseObject {
    private spritesSrc = [
        imgBug,
        imgBug2
    ];

    private animationSpeed = 1/10;

    private static DEAFAULT_DIMENSIONS = {
        width: 50,
        height: 50
    }

    private dimensions = produce(Bug.DEAFAULT_DIMENSIONS, draft => draft)

    private motion = {
        x: 1,
        y: 1
    }

    private container:Pixi.Container =  {} as Pixi.Container;
    private bug: Pixi.AnimatedSprite = {} as Pixi.AnimatedSprite;

    constructor (private app: Application, private bugsHandler: BugsHandler,
        private id: string, 
        private position: Pixi.IPointData
        
        ) {
        super();
        this.dimensions = produce(Bug.DEAFAULT_DIMENSIONS, (draft) => {
            const ratio = ApplicationScene.getScale(app.getSquareLength());
            draft.width *= ratio;
            draft.height *= ratio;
            return draft;
        })
        this.render(position);
        this.setInitialSpeed();
    }

    public pause () {
        this.bug.stop();
    }

    public resume () {
        this.bug.play();
    }

    public move = (speed = 1) => {
        const {x, y} = this.motion;
        this.container.position.y += y * speed;
        this.container.position.x += x * speed;
    }

    private setInitialSpeed = () => {
        const squareLength = this.app.getSquareLength();
        const {centerX, centerY} = ApplicationScene.getCenterPos(squareLength);
        const {x, y} = this.position;

        const distX = Math.abs(centerX - x);
        const distY = Math.abs(centerY - y);
        const sum = distX + distY;

        const speedX = distX / sum * (x > centerX ? -1 : 1);
        const speedY = distY / sum * (y > centerY ? -1 : 1);

        this.motion.x *= speedX;
        this.motion.y *= speedY;
        
    }

    

    private render ({x, y}: Pixi.IPointData) {
        this.container = new Pixi.Container();
        this.container.width = this.dimensions.width;
        this.container.height = this.dimensions.height;
        this.container.rotation = this.getAngle(x, y)

        const bug = Pixi.AnimatedSprite.fromFrames(this.spritesSrc);
        bug.width = this.dimensions.width;
        bug.height = this.dimensions.height;
        bug.play();
        bug.animationSpeed = this.animationSpeed;
        this.container.addChild(bug)
        this.bug = bug;

        this.centerPivot(this.container, this.dimensions.width, this.dimensions.height);
        this.container.position = {
            x,
            y
        }
    }

    private getAngle = (mouseX: number, mouseY: number): number => {
        const squareLength = this.app.getSquareLength()
        const {centerY, centerX} = ApplicationScene.getCenterPos(squareLength);
        return Math.atan2(centerY - mouseY, centerX - mouseX) + Math.PI * 0.5
    }


    public getRectangle = (): Rectangle => {
        return {
            x: this.container.position.x,
            y: this.container.position.y,
            width: this.container.width,
            height: this.container.height
        }
    }

    public getId = () => {
        return this.id;
    }

    public getContainer = () => {
        return this.container;
    }

    public destroy() {
        this.__destroy()   
    }
}