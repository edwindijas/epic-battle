import { Actor } from 'game/models/actor/actor';
import * as Pixi from 'pixi.js'
import { ApplicationScene } from 'game/scene/scene';
import { BugsHandler } from './bugsHandler';
import { Rectangle } from './types';

Pixi.settings.RESOLUTION = window.devicePixelRatio;

export class Application {
    private actor: Actor = {} as Actor;
    private pixiApp: Pixi.Application = {} as Pixi.Application;
    private scene: ApplicationScene = {} as ApplicationScene;
    private bugHandler: BugsHandler = {} as BugsHandler;

    private pixiAppDefaults = {
        background: '#444',
        resizeTo: window,
        backgroundAlpha: 0
    }

    constructor () {
        this.pixiApp = new Pixi.Application(this.pixiAppDefaults);
        this.scene = new ApplicationScene(this, this.pixiApp);
        this.bugHandler = new BugsHandler(this, this.pixiApp, this.scene);
        this.actor = new Actor(this, this.pixiApp);
        this.bindEventHandlers()
        this.attachEventHanlders();
        this.pixiApp.ticker.add(this.tickerHandler)
    }

    private rectanglesColliding (rect1: Rectangle, rect2: Rectangle) {
        if (rect1.x + rect1.width < rect2.x || rect1.x > rect2.x + rect2.width) {
            return false;
        }
        
        if (rect1.y + rect1.height < rect2.y || rect1.y > rect2.y + rect2.height) {
            return false;
        }
    
        return true;
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

    public attachEventHanlders = () => {
        window.addEventListener('mousemove', this.moveHandler);
        window.addEventListener('click', this.clickHandler);
    }

    public removeEventListeners = () => {
        window.removeEventListener('mousemove', this.moveHandler);
        window.removeEventListener('click', this.clickHandler);
    }

    public destroy = () => {
        this.removeEventListeners();
        this.actor.destroy();
        this.scene.destroy();
        this.pixiApp.destroy();
        this.bugHandler.destroy();
    }

    private bindEventHandlers = () => {
        this.moveHandler = this.moveHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    private tickerHandler = () => {
        this.actor.tickHandler()
        this.bugHandler.tickHandler()
        this.detectCollision();
    }

    private detectCollision = () => {
        const bugs = this.bugHandler.getBugs();
        const mortars = this.actor.getMortars();
        mortars.forEach((mortar) => {
            bugs.forEach(bug => {
                const mortarRect = mortar.getRectange();
                const bugRect = bug.getRectangle();

                if (this.rectanglesColliding(mortarRect, bugRect)) {
                    this.bugHandler.removeBug(bug.getId());
                    this.actor.removeMortar(mortar.getId())
                }
            })
        })

    }

}