class LimbSystem {
    constructor(length, speed) {
        this.nodes = [];
        this.speed = speed;

        for (let i = 0; i < length; i++) {
            this.nodes.push({ x: 0, y: 0});
        }
    }

    update(x, y) {
        this.nodes[0] = { x, y};
        for (let i = 1; i < this.nodes.length; i++) {
            const prev = this.nodes[i - 1];
            const node = this.nodes[i];
            node.x += (prev.x - node.x) * this.speed;
            node.y += (prev.y - node.y) * this.speed;
        }
    }
}

const limbSystem = new LimbSystem(10, 0.2);
const movingCursor = document.getElementById('moving-cursor');

window.addEventListener('mousemove', (e) => {
    limbSystem.update(e.clientX, e.clientY);
});