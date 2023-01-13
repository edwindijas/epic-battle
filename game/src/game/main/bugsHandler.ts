import { Application } from "./application";
import * as Pixi from 'pixi.js'
import { bugs } from "./types";
import { Bug } from "game/models/bugs/bug";
import { v4 as uuid } from 'uuid';
import { ApplicationScene } from "game/scene/scene";
import soundBugDestroyed from "game/assets/audio/WAV/Action_Obtain_Point_04.wav"

export class BugsHandler {
    private speed = 2000;
    private timeout: number | undefined;
    private bugCoordinate = {};
    private container: Pixi.Container = {} as Pixi.Container;
    private bugs: bugs = new Map<string, Bug>();
    private paused = false;

    constructor (private app: Application, private pixiApp: Pixi.Application, private scene: ApplicationScene) {
        this.container = new Pixi.Container();
        pixiApp.stage.addChild(this.container);
        
    }

    public start = () => {
        this.addBug();
    }

    public pause = () => {
        window.clearTimeout(this.timeout);
        this.paused = true;
        this.bugs.forEach(bug => {
            bug.pause();
        })
    }

    private addBug () {
        const id = this.createBugId();
        const points = this.getPoint(); 
        const bug = new Bug(this, id, points );
        this.bugs.set(id, bug);

        this.container.addChild(bug.getContainer())
        
        if (this.paused) {
            return;
        }

        this.timeout = window.setTimeout(() => {
            if (!this.paused) {
                this.addBug()
            }
        }, this.speed)
    }

    public removeBug (id: string) {
        const bug = this.bugs.get(id);
        if (!bug) {
            return;
        }
        this.container.removeChild(bug.getContainer());
        bug.destroy();
        this.bugs.delete(id);   
        this.playSound(soundBugDestroyed);
    }

    private getPoint = () => {
        const {top, left, bottom, right} = ApplicationScene.getBoundaries();
        const boundTo = [top, left, right, bottom];
        const from = Math.floor(Math.random() * 4);

        let x = 0,
            y = 0;

        const rand = (Math.random() * (right - left));

        if (from === 3 || from === 0) {
            y = boundTo[from];
            x = rand + left;
        } else {
            x = boundTo[from];
            y = rand + top;
        }
        return {x, y}
    }

    private createBugId (): string {
        const id = uuid();
        if (this.bugs.has(id)) {
            return this.createBugId()
        }
        return id;
    }

    public destroy () {
        this.bugs.forEach((bug, key) => {
            bug.destroy();
            this.bugs.delete(key);
        })

        if (this.timeout) {
            window.clearTimeout(this.timeout);
        }
    }

    public tickHandler = () => {
        this.bugs.forEach(bug => {
            bug.move();
        })
    }

    public getBugs = () => {
        return this.bugs;
    }

    private playSound = (src: string) => {
        const audio = new Audio(src);
        audio.play();
    }

}