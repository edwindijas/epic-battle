import { Actor } from 'game/models/actor/actor';
import * as Pixi from 'pixi.js'
import { ApplicationScene } from 'game/scene/scene';
import { BugsHandler } from './bugsHandler';
import { AppEventListener, AppEventType, Rectangle } from './types';
import gameSound from "game/assets/audio/WAV/Music_Loop.wav"
import {v4 as uuid} from 'uuid'
import { produce } from "immer"

import { AddStatListener, GameData, RemoveStatListener, StatListener } from 'models/Stat';

Pixi.settings.RESOLUTION = window.devicePixelRatio;

export class Application {
    private static DEFAULT_STAT: GameData = {
        life: 100,
        score: 0,
        lifeMax: 100,
        multiplier: 1,
        armo: 2,
        armoMax: 2
    }

    private actor: Actor = {} as Actor;
    private pixiApp: Pixi.Application = {} as Pixi.Application;
    private scene: ApplicationScene = {} as ApplicationScene;
    private bugHandler: BugsHandler = {} as BugsHandler;
    private paused = false;
    private gameAudio: HTMLAudioElement = {} as HTMLAudioElement;
    private statListener = new Map<string, StatListener>;
    private eventLiseners = new Map<string, AppEventListener>


    public actorStat = produce(Application.DEFAULT_STAT, draft => draft);

    private pixiAppDefaults = {
        background: 'transparent',
        backgroundAlpha: 0,
        width: 800,
        height: 800
    }

    constructor () {
        this.pixiApp = new Pixi.Application(this.pixiAppDefaults);
        this.scene = new ApplicationScene(this, this.pixiApp);
        this.bugHandler = new BugsHandler(this, this.pixiApp, this.scene);
        this.actor = new Actor(this, this.pixiApp);
        this.bindEventHandlers();
        this.gameAudio = new Audio(gameSound);
        this.gameAudio.volume = 0.5;
        this.gameAudio.loop = true;
    }

    public start = () => {
        this.gameAudio.play();
        this.attachEventHanlders();
        this.pixiApp.ticker.add(this.tickerHandler);
        this.bugHandler.start();
        this.fireEvent('datachanged');
    }

    public restart = () => {
        this.actorStat = produce(this.actorStat, draft => draft)
    }

    public pause = () => {
        this.paused = true;
        this.bugHandler.pause();
        this.removeEventListeners();
        this.gameAudio.pause();
    }

    public static resume = () => {

    }

    public removeUserMortar = () => {
        this.actorStat = produce(this.actorStat, (draft) => {
            draft.armo -= 1;
        })
        this.fireEvent('datachanged')
    }

    public addUserMortar = () => {
        this.actorStat = produce(this.actorStat, (draft) => {
            draft.armo += 1;
        })
        this.fireEvent('datachanged')
    }

    /** TODO: ADD Mortar function remove from actor */
    public fireMortar = () => {

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
        if (this.paused) {
            return;
        }
        this.actor.clickHandler(e);
    }

    public moveHandler (e: MouseEvent) {
        if (this.paused) {
            return;
        }
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
        this.gameAudio.pause();
    }

    private bindEventHandlers = () => {
        this.moveHandler = this.moveHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    private tickerHandler = () => {
        if (this.paused) {
            return;
        }
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
                    this.addScore(1);
                    this.addUserMortar();
                }
            })
        })

        bugs.forEach(bug => {
            const bugRect = bug.getRectangle();
            const actRect = this.actor.getRectangle();

            if (this.rectanglesColliding(bugRect, actRect)) {
                this.bugHandler.removeBug(bug.getId())
                this.addLife(-20);
            }
        })

    }

    private addScore = (score: number) => {

        this.actorStat = produce(this.actorStat, (draft) => {
            draft.score += score
            return draft;
        })

        this.fireEvent('datachanged');
    }

    private addLife = (life: number) => {
        this.actorStat = produce(this.actorStat, (draft) => {
            draft.life += life
            return draft;
        })

        this.fireEvent('datachanged');
    }


    public addGameEventListener = (appEventListener: AppEventListener) => {
        const id = this.getListenerId();
        this.eventLiseners.set(id, appEventListener);
        return id;
    }

    public removeGameEventListener = (id: string) => {
        this.eventLiseners.delete(id);
    }

    private fireEvent = (type: AppEventType) => {
        this.eventLiseners.forEach((eventListener) => {
            if (type === 'datachanged' && eventListener.event === 'datachanged') {
                return eventListener.callback(this.actorStat);
            } else if (type === eventListener.event && eventListener.event !== 'datachanged') {
                return eventListener.callback();
            }

        })
    }

    public reset = () => {

    }

    private getListenerId = () :string => {
        const id = uuid();
        if (this.statListener.has(id)) {
            return this.getListenerId()
        }
        return id;
    }

}