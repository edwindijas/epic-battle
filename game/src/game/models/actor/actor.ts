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

export class Actor extends BaseObject {
    protected preloadAssets: string[] = [
        BombSound
    ]
    public static dimensions = {
        width: 100,
        height: 100
    }

    private rotation = 0;
    protected container: Pixi.Container = {} as Pixi.Container;
    protected mortarContainer: Pixi.Container = {} as Pixi.Container;
    protected cannon: Pixi.Container = {} as Pixi.Container;
    protected base: Pixi.Container = {} as Pixi.Container;
    private mortars = new Map<string, Mortar>();

    public static getDimensions (): {width: number, height: number} {
        const height = 150;
        const width = 150;

        return {
            width,
            height
        }
    }


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
        container.width = Actor.dimensions.width;
        container.height = Actor.dimensions.height;
        base.width = Actor.dimensions.width;
        base.height = Actor.dimensions.height;
        container.addChild(base);
        this.centerContainer(container);
        this.base = container;
    }

    private createCannon = () => {
        const container = new Pixi.Container();
        const cannon = Pixi.Sprite.from(imgCannon);
        container.addChild(cannon);
        container.width = Actor.dimensions.width;
        container.height = Actor.dimensions.height;
        cannon.width = Actor.dimensions.width;
        cannon.height = Actor.dimensions.height;
        this.centerContainer(container);
        this.cannon = container;
    }

    private centerContainer = (container: Pixi.Container) => {
        const {centerX: x, centerY: y} = ApplicationScene.getCenterPos();
        container.width = Actor.dimensions.width;
        container.height = Actor.dimensions.height;
        container.position = {x, y};
        
        container.pivot = {
            x: Actor.dimensions.width / 2,
            y: Actor.dimensions.height / 2
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
        const mortar = new Mortar(id, clientX, clientY);
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

