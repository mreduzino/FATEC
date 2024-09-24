// Alunos: Marcelo Henrique Reduzino e Gustavo Silva de Carvalho

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

const NewQueue = new Queue();
console.log(NewQueue.isEmpty()); // exibe true

function inverterFila(F) {
    let P = []; // Criando uma pilha vazia
    let aux;
  
    // Desenfileirar da fila F e empilhar na pilha P
    while (!F.isEmpty()) {
      aux = F.dequeue();
      P.push(aux);
    }
  
    // Desempilhar da pilha P e enfileirar na fila F
    while (P.length > 0) {
      aux = P.pop();
      F.enqueue(aux);
    }
  }