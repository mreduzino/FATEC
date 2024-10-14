class LinkedListOrdered {
    constructor() {
        this.count = 0;
        this.head = undefined;
    }

    greatherOrEqual(elementA, elementB) {
        return elementA.localeCompare(elementB) >= 0;
    }

    indexOfGreatherThan(element) {
        let current = this.head;
        let i = 0;
        while (current != null) {
            if (this.greatherOrEqual(current.element, element)) {
                return i;
            }
            current = current.next;
            i++;
        }
        return i;
    }

    insertOrdered(element) {
        if (this.isEmpty()) {
            this.push(element);
        } else {
            const index = this.indexOfGreatherThan(element);
            this.insert(element, index);
        }
    }

    push(element) {
        const node = new Node(element);
        if (this.head == null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.count;
    }

    toString() {
        if (this.head == null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString}\n${current.element}`;
            current = current.next;
        }
        return objString;
    }
}

class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}

// Testando a classe LinkedListOrdered
let ordenada = new LinkedListOrdered();
ordenada.insertOrdered("DANIEL BRITO DA SILVA JUNIOR");
ordenada.insertOrdered("ERIC VINICIUS DA SILVA MENEGON");
ordenada.insertOrdered("FELIPE AUGUSTO PEREIRA LEMES");
ordenada.insertOrdered("FERNANDA VICTORIA FELIX OLIVEIRA");
ordenada.insertOrdered("ADRIANO DOS SANTOS");
ordenada.insertOrdered("GIOVANI DE BIAGI ALVES");
ordenada.insertOrdered("VITOR CARDOSO DA CRUZ");
ordenada.insertOrdered("GRAZIELLA SOUZA");
ordenada.insertOrdered("CAIO HENRIQUE FERREIRA DE SOUZA");
ordenada.insertOrdered("RODRIGO MORAES DE SOUZA GARCIA");
ordenada.insertOrdered("HOSANA AZEVEDO PIRES");
ordenada.insertOrdered("JOAO PEDRO SOUZA SILVA");
ordenada.insertOrdered("DANIEL GALVAO MAGALHAES DA SILVA");
ordenada.insertOrdered("LEONARDO VINÍCIUS GURTLER HUBERT");
ordenada.insertOrdered("MARCELO HENRIQUE REDUZINO");
ordenada.insertOrdered("WILLIAM SILVA DOS REIS");
ordenada.insertOrdered("NATHAN FERRACINI BATISTA");
ordenada.insertOrdered("GUSTAVO SILVA DE CARVALHO");
ordenada.insertOrdered("PEDRO HENRIQUE BONOMO SANTOS");
ordenada.insertOrdered("BRUNO HENRIQUE QUERICHELLI GARCIA");
ordenada.insertOrdered("RAMON GODINHO");
ordenada.insertOrdered("JOAO VITOR FERNANDES DE MATOS ROCHA");
ordenada.insertOrdered("MATHEUS HENRIQUE ALMEIDA VIEIRA NEVES");
ordenada.insertOrdered("ROBSON ALAN MANTOVANI");
ordenada.insertOrdered("ARTHUR DAVI GOMES");

console.log("ordenada.size(): " + ordenada.size());
console.log(ordenada.toString());