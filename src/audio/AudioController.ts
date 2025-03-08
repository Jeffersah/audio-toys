class AudioController
{
    private context: AudioContext | null;

    constructor(){
        this.context = null;
    }

    getContext() {
        if(this.context === null){
            this.context = new AudioContext();
        }
        return this.context;
    }

    stop() {
        if(this.context !== null){
            this.context.close();
            return;
        }
    }

    restart() {
        if(this.context !== null){
            this.context.close();
        }
        this.context = new AudioContext();
        return this.context;
    }
}

const controller = new AudioController();
export default controller;