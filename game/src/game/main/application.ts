import { Actor } from 'game/models/actor/actor';
import * as Pixi from 'pixi.js'
import { settings } from 'pixi.js';
import { ApplicationScene } from 'game/scene/scene';

settings.RESOLUTION = window.devicePixelRatio;

export class Application {
    private actor: Actor = {} as Actor;
    private pixiApp: Pixi.Application = {} as Pixi.Application;
    private scene: ApplicationScene = {} as ApplicationScene;

    private pixiAppDefaults = {
        background: '#444',
        resizeTo: window,
    }

    constructor () {
        this.pixiApp = new Pixi.Application(this.pixiAppDefaults);
        this.actor = new Actor(this, this.pixiApp);
        this.scene = new ApplicationScene(this, this.pixiApp);
        window.addEventListener('mousemove', this.moveHandler.bind(this));
        window.addEventListener('click', this.clickHandler.bind(this));
    }

    public addMortar () {

    }

    public getView () {
        return this.pixiApp.view;
    }

    public clickHandler (e: MouseEvent) {
        this.actor.clickHandler(e);
    }

    public moveHandler (e: MouseEvent) {
        this.actor.moveHandler(e);
    }
}