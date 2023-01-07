export class BaseObject {

    /**
     * Get the middle coordinates for the screen
     * @returns { centerX: number, centerY }
     */
    

    protected playSound(src: string) {
        const audio = new Audio(src);
        audio.play();
    }


    protected preload = (...src: string[]) => {
        src.forEach((item) => {
            fetch(item);
        })
    }

    
}