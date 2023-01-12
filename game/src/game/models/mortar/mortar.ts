import { BaseObject } from "game/library/base";
import { Actor as Cannon } from "game/models/actor/actor";
import * as Pixi from "pixi.js";
import { ApplicationScene } from "game/scene/scene";
import { Application } from "game/main/application";
import BombPic from './assets/Bomb.png';
import BounceSound from 'game/assets/audio/WAV/Interaction_Soft_Stone_02.wav';
import { Rectangle } from 'game/main/types'
export class Mortar extends BaseObject {
    private container: Pixi.Container = {} as Pixi.Container;
    private position = {
        x: 0,
        y: 0
    }

    private dimensions = {
        width: 15,
        height: 15
    }

    private motion = {
        x: 30,
        y: 30
    }

    private forceAdd = {
        x: 0,
        y: 0
    }


    private stop = false;
    /**
     * Initialise Mortar Object to fire a weapon from a known coordinate
     * @param {Application} pixiApp 
     * @param {number} mouseX mouse position x
     * @param {number} mouseY mouse position y
     */
    constructor (private id: string, mouseX: number, mouseY: number) {
        super();
        this.render();
        this.setInitialCoordinates(mouseX, mouseY);
        this.setInitialSpeed(mouseX, mouseY)
        this.positionObject();
        
    }

    /**
     * Set initial coordinates for the mortar
     * The distance is at the top of the cannon
     * @param {number} mouseX mouse position x
     * @param {number} mouseY mouse position y
     */
    private setInitialCoordinates = (mouseX: number, mouseY: number) => {

        const {centerX, centerY} = ApplicationScene.getCenterPos()
        const angle = Cannon.getAngle(mouseX, mouseY);
        const cannonDimensions = Cannon.getDimensions();
        
        const distX = Math.sin(angle) * cannonDimensions.width / 2;
        const distY = Math.cos(angle) * -cannonDimensions.height / 2;

        this.position.x =  centerX + distX;
        this.position.y = distY + centerY;


    }

    private setInitialSpeed = (mouseX: number, mouseY: number) => {

        const {centerX, centerY} = ApplicationScene.getCenterPos();
        const {adjustX, adjustY} = ApplicationScene.getAdjustMousePos(mouseX, mouseY);
        const {x, y} = this.position;

        const distX = Math.abs(centerX - x);
        const distY = Math.abs(centerY - y);
        const sum = distX + distY;

        const speedX = distX / sum * (adjustX > centerX ? 1 : -1);
        const speedY = distY / sum * (adjustY > centerY ? 1 : -1)

        this.motion.x *= speedX;
        this.motion.y *= speedY;
        
    }

    public move = () => {
       
        const {left, right, top, bottom} = this.getBoundaries();
        let {x, y} = this.motion,
            playSound = false;

        const {x: posX, y: posY} = this.container.position;
        //const mortarNextRight = posX + this.dimensions.width + y;

        x += this.forceAdd.x;
        y += this.forceAdd.y;

        this.resetForceAdd()

        if ((posY + y <= top && this.motion.y < 0) || (posY + y >= bottom && this.motion.y > 0)) {
            const target = (this.motion.y < 0 ? top : bottom) - posY;
            const balance = y - target;
            y = target;
            this.forceAdd.y -= balance;
            this.motion.y *= -1;
            playSound = true;
            this.stop = true;
        }

        if ((posX + x <= left && this.motion.x < 0) || (posX + x >= right && this.motion.x > 0)) {
            const target = (this.motion.x < 0 ? left : right) - posX;
            const balance = x - target;
            x = target;
            this.forceAdd.x -= balance;
            this.motion.x *= -1;
            playSound = true;
            this.stop = true;
        }

        this.container.position.y += y;
        this.container.position.x += x;

        if (playSound) {
            this.playSound(BounceSound);
        }
    }

    private actionBoundary () {
        
    }

    private resetForceAdd () {
        this.forceAdd = {
            x: 0,
            y: 0
        }
    }

    private positionObject () {
        this.container.position = {
            x: this.position.x,
            y: this.position.y
        }
    }

    private render () {

        const {width, height} = this.dimensions;

        const container = new Pixi.Container();
        container.width = width;
        container.height = height;

        const sprite = Pixi.Sprite.from(BombPic);
        sprite.width = width;
        sprite.height = height;

        container.pivot = {
            x: width / 2,
            y: height / 2
        }

        container.addChild(sprite);
        this.container =  container;
    }

    private getBoundaries (): {left: number, right: number, top: number, bottom: number} {
        let  {left, right, top, bottom} = ApplicationScene.getBoundaries();

        const leftP = this.dimensions.width / 2;
        const topP = this.dimensions.height / 2;

        left += leftP;
        right -= leftP;
        top += topP;
        bottom -= topP;

        return  {left, right, top, bottom};
    }


    protected handleWindowResize = () => {
        const { width: oWidth, height: oHeight } = this.__screenDimensions;
        const { width, height } = ApplicationScene.getWindowDimensions();

        let { x, y } = this.container.position;
        x -=  oWidth - width;
        y -= oHeight - height;

        this.container.position = {
            x, y
        }

        this.__screenDimensions = {width, height}
    }

    public getId = () => {
        return this.id
    }

    public getContainer = () => {
        return this.container;
    }

    public getRectange = (): Rectangle => {
        return {
            x: this.container.position.x,
            y: this.container.position.y,
            width: this.container.width,
            height: this.container.height
        }
    }

}
