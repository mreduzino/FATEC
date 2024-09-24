class Queue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
        this.items[this.tail] = element;
        this.tail++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const item = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return item;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.head];
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
}

class dequeue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
}

addFront(element)
if (this.isEmpty()) { // {1}
    this.addBack(element);
} else if (this.lowestCount > 0) { // {2}
    this.lowestCount--;
    this.items[this.lowestCount] = element;
} else {
    for (let i = this.count; i > 0; i--) { // {3}
        this.items[i] = this.items[i - 1];
    }
    this.count++;
    this.lowestCount = 0;
    this.items[0] = element; // {4}
}

items = {
    1: 8,
    2: 9,
};
count = 3;
lowestCount = 1;

const deque = new Deque();
console.log(deque.isEmpty()); // exibe true
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString()); // John,Jack
deque.addBack('Camila');
console.log(deque.toString()); // John,Jack,Camila
console.log(deque.size()); // exibe 3
console.log(deque.isEmpty()); // exibe false
deque.removeFront(); // remove John
console.log(deque.toString()); // Jack,Camila
deque.removeBack(); // Camila decide sair
console.log(deque.toString()); // Jack
deque.addFront('John'); // John retorna para pedir uma informação
console.log(deque.toString()); // John,Jack

function hotPotato(elementList, num) {
    const queue = new Queue(); // {1}
    const eliminatedList = [];

    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i]); // {2}
    }

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue()); // {3}
        }
        eliminatedList.push(queue.dequeue()); // {4}
    }
    return {
        eliminated: eliminatedList,
        winner: queue.dequeue() // {5}
    };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato game.`);
});