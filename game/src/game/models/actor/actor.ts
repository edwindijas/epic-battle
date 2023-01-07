import * as Pixi from "pixi.js"
import img from "game/assets/models/actor/actor.png"
import { BaseObject } from "game/library/base";
import { Application } from "game/main/application";
import { Mortar } from "game/models/mortar/mortar";
import BombSound from 'game/assets/audio/WAV/Spell_Explosion.wav';
import { ApplicationScene } from "game/scene/scene";

export class Actor extends BaseObject {
    protected preloadAssets: string[] = [
        BombSound
    ]
    public static dimensions = {
        width: 140,
        height: 140
    }

    private rotation = 0;
    protected container: Pixi.Container = {} as Pixi.Container;
    private mortals: Mortar[] = [];

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
        const {centerY, centerX} = ApplicationScene.getCenterPos();
        return Math.atan2(centerY - mouseY, centerX - mouseX) - Math.PI * 0.5
    }


    constructor (private app: Application, private pixiApp: Pixi.Application<Pixi.ICanvas>) {
        super()
        this.setup(pixiApp);
    }

    private setup (pixiApp: Pixi.Application) {
        const sprite = Pixi.Sprite.from(img);

        sprite.width = Actor.dimensions.width;
        sprite.height = Actor.dimensions.height;

        this.container = new Pixi.Container();

        this.container.width = Actor.dimensions.width;
        this.container.height = Actor.dimensions.height;

        this.container.addChild(sprite);

        const {centerX: x, centerY: y} = ApplicationScene.getCenterPos();

        this.container.position = {x, y}
        this.container.pivot = {
            x: Actor.dimensions.width / 2,
            y: Actor.dimensions.height / 2
        }

        pixiApp.ticker.add(() => {
            this.container.rotation = this.rotation;
        })

        pixiApp.stage.addChild(this.container);
        
    }

    public moveHandler = (e: MouseEvent) => {
        const {x, y} = e;    
        this.rotation = Actor.getAngle(x, y)
    }

    private fireMortar = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        this.playSound(BombSound)
        const mortar = new Mortar(this.pixiApp, clientX, clientY);
        this.mortals.push(mortar)
    }

    public clickHandler = (e: MouseEvent) => {
       this.fireMortar(e);
    }


}



