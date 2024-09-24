class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.tail - this.head;
    }

    clear() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let str = `${this.items[this.head]}`;
        for (let i = this.head + 1; i < this.tail; i++) {
            str = `${str},${this.items[i]}`;
        }
        return str;
    }
    addBack(element) {
        this.items[this.tail] = element;
        this.tail++;
    }
    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        const item = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return item;
    }   
}