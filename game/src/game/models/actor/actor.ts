import * as Pixi from "pixi.js"
import imgCannon from "game/assets/models/actor/cannon.png"
import imgBase from "game/assets/models/actor/base.png"
import { BaseObject } from "game/library/base";
import { Application } from "game/main/application";
import { Mortar } from "game/models/mortar/mortar";
import BombSound from 'game/assets/audio/WAV/Interaction_Hard_Stone.wav';
import { ApplicationScene } from "game/scene/scene";
import {v4 as uuid} from 'uuid'
import { Rectangle } from "game/main/types";
import produce from "immer";

export class Actor extends BaseObject {
    protected preloadAssets: string[] = [
        BombSound
    ]
    public static DEFAULT_DIMENSION = {
        width: 100,
        height: 100
    }

    private dimensions = produce(Actor.DEFAULT_DIMENSION, draft => draft);

    private rotation = 0;
    protected container: Pixi.Container = {} as Pixi.Container;
    protected mortarContainer: Pixi.Container = {} as Pixi.Container;
    protected cannon: Pixi.Container = {} as Pixi.Container;
    protected base: Pixi.Container = {} as Pixi.Container;
    private mortars = new Map<string, Mortar>();

    /**
     * Set initial coordinates for the mortar
     * The distance is at the top of the cannon
     * @param {number} mouseX mouse position x
     * @param {number} mouseY mouse position y
     * @return number mouseAngle from center in radians
     */
    public static getAngle = (mouseX: number, mouseY: number): number => {
        const {centerY, centerX} = ApplicationScene.getWindowCenterPos();
        return Math.atan2(centerY - mouseY, centerX - mouseX) - Math.PI * 0.5
    }


    constructor (private app: Application, private pixiApp: Pixi.Application<Pixi.ICanvas>) {
        super()

        const squareLength = app.getSquareLength()

        this.dimensions = produce(Actor.DEFAULT_DIMENSION, (draft) => {
            draft.width *= ApplicationScene.getScale(squareLength);
            draft.height *= ApplicationScene.getScale(squareLength);
            return draft;
        })

        this.setup(pixiApp);
    }

    private setup (pixiApp: Pixi.Application) {
        this.mortarContainer = new Pixi.Container();
        this.createCannon();
        this.createBase();
        pixiApp.stage.addChild(this.mortarContainer);
        pixiApp.stage.addChild(this.base);
        pixiApp.stage.addChild(this.cannon);
        
    }

    private createBase = () => {
        const container = new Pixi.Container();
        const base = Pixi.Sprite.from(imgBase);
        const { width, height } = this.dimensions;
        this.centerContainer(container);

        base.width = width;
        base.height = height;
        container.addChild(base);
        this.base = container;
    }

    private createCannon = () => {
        const container = new Pixi.Container();
        const cannon = Pixi.Sprite.from(imgCannon);
        const { width, height } = this.dimensions;
        this.centerContainer(container);
        cannon.width = width;
        cannon.height = height;
        this.cannon = container;
        container.addChild(cannon);
    }

    private centerContainer = (container: Pixi.Container) => {
        const squareLength = this.app.getSquareLength()
        const {centerX: x, centerY: y} = ApplicationScene.getCenterPos(squareLength);
        const { width, height } = this.dimensions;
        container.width = width;
        container.height = height;
        container.position = {x, y};
        
        container.pivot = {
            x: width / 2,
            y: height / 2
        }
    }

    public moveHandler = (e: MouseEvent) => {
        const {x, y} = e;    
        this.rotation = Actor.getAngle(x, y)
    }

    public tickHandler = () => {
        this.cannon.rotation = this.rotation;
        this.mortars.forEach((mortar) => {
            mortar.move();
        })
    }

    private fireMortar = (e: MouseEvent) => {
        if (this.app.actorStat.armo === 0) {
            return;
        }
        const { clientX, clientY } = e;
        this.playSound(BombSound)
        const id = this.createMortarId();
        const mortar = new Mortar(this.app, this, id, clientX, clientY);
        this.mortars.set(id, mortar);
        this.mortarContainer.addChild(mortar.getContainer());
        this.app.removeUserMortar();
    }

    private createMortarId = (): string => {
        const id = uuid();

        if (this.mortars.has(id)) {
            return this.createMortarId();
        }

        return uuid()
    }

    public clearMortars = () => {
        this.mortars.forEach((mortar, id) => {
            this.removeMortar(id);
        })
    }

    public clickHandler = (e: MouseEvent) => {
       this.fireMortar(e);
    }

    protected handleWindowResize = () => {
        //this.centerContainer(this.container);
        //this.centerContainer(this.cannon);
    }

    public getMortars = () => {
        return this.mortars;
    }

    public removeMortar = (id: string) => {
        const mortar = this.mortars.get(id);
        if (!mortar) {
            return;
        }

        this.mortarContainer.removeChild(mortar.getContainer());
        mortar.destroy();
        this.mortars.delete(id);
    }

    public getRectangle = (): Rectangle => {
        return {
            x: this.base.position.x,
            y: this.base.position.y,
            width: this.base.width / 2,
            height: this.base.height / 2
        }
    }

}

