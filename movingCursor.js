class LimbSystem {
    constructor(length, speed) {
        this.nodes = [];
        this.speed = speed;

        for (let i = 0; i < length; i++) {
            this.nodes.push({ x: 0, y: 0});
        }
    }
}