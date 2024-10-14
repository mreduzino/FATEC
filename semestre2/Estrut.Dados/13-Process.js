class Process {
    constructor(id, name, priority, wait) {
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.wait = wait;
    }
}

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedListOrdered {
    constructor() {
        this.count = 0;
        this.head = null;
    }

    addProcess(process) {
        const newNode = new Node(process);

        if (process.priority === 0) {
            // Inserir no início da fila
            newNode.next = this.head;
            this.head = newNode;
        } else {
            // Inserir de forma ordenada
            let current = this.head;
            let previous = null;

            while (current !== null && current.element.priority <= process.priority) {
                previous = current;
                current = current.next;
            }

            if (previous === null) {
                this.head = newNode;
            } else {
                previous.next = newNode;
            }
            newNode.next = current;
        }

        this.count++;
    }

    killLongestWaitingProcess() {
        if (this.isEmpty()) {
            return null;
        }

        let maxWait = -1;
        let maxWaitPrev = null;
        let maxWaitCurrent = null;
        let current = this.head;
        let prev = null;

        while (current !== null) {
            if (current.element.wait > maxWait) {
                maxWait = current.element.wait;
                maxWaitPrev = prev;
                maxWaitCurrent = current;
            }
            prev = current;
            current = current.next;
        }

        if (maxWaitPrev === null) {
            this.head = this.head.next;
        } else {
            maxWaitPrev.next = maxWaitCurrent.next;
        }

        this.count--;
        return maxWaitCurrent.element;
    }

    executeProcess() {
        if (this.isEmpty()) {
            return null;
        }
        const executed = this.head.element;
        this.head = this.head.next;
        this.count--;
        return executed;
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    toString() {
        let result = '';
        let current = this.head;
        while (current !== null) {
            result += `ID: ${current.element.id}, Name: ${current.element.name}, Priority: ${current.element.priority}, Wait: ${current.element.wait}\n`;
            current = current.next;
        }
        return result;
    }
}

// Exemplo de uso:
const processQueue = new LinkedListOrdered();

// Adicionando o processo inicial conforme solicitado
processQueue.addProcess(new Process(104, "Window manager", 4, 20));

// Adicionando mais processos para teste
processQueue.addProcess(new Process(101, "System Process", 0, 5));
processQueue.addProcess(new Process(102, "User App", 2, 15));
processQueue.addProcess(new Process(103, "Background Task", 3, 25));

console.log("Processos na fila:");
console.log(processQueue.toString());

console.log("\nExecutando um processo:");
const executed = processQueue.executeProcess();
console.log(`Processo executado: ${executed.name}`);

console.log("\nMatando o processo com maior tempo de espera:");
const killed = processQueue.killLongestWaitingProcess();
console.log(`Processo morto: ${killed.name}`);

console.log("\nProcessos restantes na fila:");
console.log(processQueue.toString());