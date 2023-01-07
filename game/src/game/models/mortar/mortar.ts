import { BaseObject } from "game/library/base";
import { Actor as Cannon } from "game/models/actor/actor";
import { Application, Container, Sprite } from "pixi.js";
import { ApplicationScene } from "game/scene/scene";
import BombPic from './assets/Bomb.png';
import BounceSound from 'game/assets/audio/WAV/Interaction_Soft_Stone_02.wav';

export class Mortar extends BaseObject {

    private container: Container = {} as Container;
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
     * @param {Application} app 
     * @param {number} mouseX mouse position x
     * @param {number} mouseY mouse position y
     */
    constructor (app: Application, mouseX: number, mouseY: number) {
        super();
        this.render();
        this.setInitialCoordinates(mouseX, mouseY);
        this.setInitialSpeed(mouseX, mouseY)
        this.positionObject();
        app.stage.addChild(this.container);
        app.ticker.add(this.move);
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
        const {x, y} = this.position;

        const distX = Math.abs(centerX - x);
        const distY = Math.abs(centerY - y);
        const sum = distX + distY;

        const speedX = distX / sum * (mouseX > centerX ? 1 : -1);
        const speedY = distY / sum * (mouseY > centerY ? 1 : -1)

        this.motion.x *= speedX;
        this.motion.y *= speedY;
        
    }

    private move = () => {
       
        const {left, right, top, bottom} = this.getBoundaries();
        let {x, y} = this.motion,
            playSound = false;

        const {x: posX, y: posY} = this.container.position;
        //const mortarNextRight = posX + this.dimensions.width + y;

        if (this.container.position.y < top || this.container.position.y > bottom || this.stop) {
            return;
        }

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

    private moveObjectBack = () => {
        this.container.rotation += 0.01;
        this.container.position.y += this.motion.y;
        this.container.position.x += this.motion.x;

        const {left, right, top, bottom} = this.getBoundaries()
    
        if (this.container.position.x + this.dimensions.width >= right ||
            this.container.position.x <= left) {
            this.motion.x = -this.motion.x;
            this.playSound(BounceSound);
        }

        if (this.container.position.y + this.dimensions.height >= bottom
            || this.container.position.y <= top) {
            this.motion.y = -this.motion.y;
            this.playSound(BounceSound);
        }
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

        const container = new Container();
        container.width = width;
        container.height = height;

        const sprite = Sprite.from(BombPic);
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


}

/**
 *  private moveMortar = () => {
       
        const {left, right, top, bottom} = this.getBoundaries();
        let {x, y} = this.motion,
            playSound = false;

        const {x: posX, y: posY} = this.container.position;
        //const mortarNextRight = posX + this.dimensions.width + y;

        if (this.container.position.y < top || this.container.position.y > bottom || this.stop) {
            return;
        }

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
 */