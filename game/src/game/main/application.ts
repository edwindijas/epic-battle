import { Actor } from 'game/models/actor/actor';
import * as Pixi from 'pixi.js'
import { ApplicationScene } from 'game/scene/scene';
import { BugsHandler } from './bugsHandler';
import { AppEventListener, AppEventType, Rectangle } from './types';
import gameSound from "game/assets/audio/WAV/Music_Loop.wav"
import gameOverSound from "game/assets/audio/WAV/Jingle_Game_Over_01.wav";

import {v4 as uuid} from 'uuid'
import { produce } from "immer"

import { GameData, StatListener } from 'models/Stat';
import { saveScore } from 'models/score';


export class Application {
    private static DEFAULT_STAT: GameData = {
        life: 100,
        score: 0,
        lifeMax: 100,
        multiplier: 15,
        armo: 5,
        armoMax: 5
    }

    private static DEFAULT_SPEED_ADJUST_TIME = 1500;
    private static SPEED_INCREMENT = 0.2;
    private speedAdjustTime = Application.DEFAULT_SPEED_ADJUST_TIME;
    private  static MAX_SPEED = 4;
    private actor: Actor = {} as Actor;
    private pixiApp: Pixi.Application = {} as Pixi.Application;
    private scene: ApplicationScene = {} as ApplicationScene;
    private bugHandler: BugsHandler = {} as BugsHandler;
    public paused = true;
    private gameAudio: HTMLAudioElement = {} as HTMLAudioElement;
    private statListener = new Map<string, StatListener>;
    private eventLiseners = new Map<string, AppEventListener>;
    private static DEFAULT_SPEED = 1;
    private speed = Application.DEFAULT_SPEED;
    private squareLength = 0;

    public actorStat = produce(Application.DEFAULT_STAT, draft => draft);
    private pixiAppDefaults = {
        background: 'transparent',
        backgroundAlpha: 0,
        width: ApplicationScene.getSquareLength(),
        height: ApplicationScene.getSquareLength()
    }

    constructor () {

        this.squareLength = ApplicationScene.getSquareLength();

        this.pixiAppDefaults = produce(this.pixiAppDefaults, (draft) => {
            draft.width = this.squareLength;
            draft.height = this.squareLength;
        })

        this.pixiApp = new Pixi.Application(this.pixiAppDefaults);
        this.scene = new ApplicationScene(this, this.pixiApp);
        this.bugHandler = new BugsHandler(this, this.pixiApp, this.scene);
        this.actor = new Actor(this, this.pixiApp);
        this.bindEventHandlers();
        this.gameAudio = new Audio(gameSound);
        this.gameAudio.volume = 0.5;
        this.gameAudio.loop = true;
    }

    public start = (resume = false) => {
        this.paused = false;
        this.gameAudio.play();
        this.gameAudio.playbackRate = 1 + (this.speed / 4);
        this.attachEventHanlders();
        this.pixiApp.ticker.add(this.tickerHandler);
        this.bugHandler.start(resume);
        this.fireEvent('datachanged');

        if (!resume) {
            this.actorStat = produce(Application.DEFAULT_STAT, draft => draft);
            this.actor.clearMortars()
            this.speed = Application.DEFAULT_SPEED;
        } 

        this.fireEvent('restart')

    }

    public restart = () => {
        this.actorStat = produce(this.actorStat, draft => draft);
        this.fireEvent('restart')
    }

    private gameOver = () => {
        this.pause();
        this.playAudio(gameOverSound);
        this.fireEvent('over');
        saveScore(this.actorStat.score);
    }

    public pause = () => {
        this.paused = true;
        this.bugHandler.pause();
        this.removeEventListeners();
        this.pixiApp.ticker.remove(this.tickerHandler);
        this.gameAudio.pause();
        this.fireEvent('pause')
    }

    public resume = () => {
        if (this.actorStat.life <= 0) {
            return;
        } 

        this.start(true);
        this.fireEvent('resume');
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
        this.changeSpeed();
        this.actor.tickHandler()
        this.bugHandler.tickHandler(this.speed)
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
                    this.addScore(mortar.getScore());
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
            draft.score += Math.floor(score * this.speed * this.actorStat.multiplier)
            return draft;
        })

        this.fireEvent('datachanged');
    }

    private addLife = (life: number) => {

        let newLife = this.actorStat.life + life;
            newLife = newLife < 0 ? 0 : newLife;


        this.actorStat = produce(this.actorStat, (draft) => {
            draft.life = newLife;
            return draft;
        })

        if (newLife === 0) {
            this.gameOver()
        }
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

    private getListenerId = () :string => {
        const id = uuid();
        if (this.statListener.has(id)) {
            return this.getListenerId()
        }
        return id;
    }

    private changeSpeed = () => {
        if (this.speed > Application.MAX_SPEED) {
            return;
        }
        if (this.speedAdjustTime <= 0) {
            this.speed += Application.SPEED_INCREMENT;
            this.bugHandler.changeSpeed(this.speed);
            this.gameAudio.playbackRate = 1 + (this.speed / 4)
            this.speedAdjustTime = Application.DEFAULT_SPEED_ADJUST_TIME * this.speed;
        } else {
            this.speedAdjustTime -= 1;
        }
    }

    private playAudio = (src: string, volume = 1) => {
        const audio = new Audio(src);
        audio.volume = volume;
        audio.play();
    }

    public getSquareLength = () => {
        return this.squareLength;
    }

    public getSpeed = () => {
        return this.speed;
    }

}