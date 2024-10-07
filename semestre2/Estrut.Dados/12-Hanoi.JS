class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
        return null;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
        return null;
    }

    size() {
        return this.items.length;
    }
}

function moveDisks(n, source, target, auxiliary) {
    if (n > 0) {
        // Mova n-1 discos da origem para a auxiliar, usando destino como auxiliar
        moveDisks(n - 1, source, auxiliary, target);

        // Mova o disco restante da origem para o destino
        const disk = source.pop();
        target.push(disk);
        console.log(`Movendo disco ${disk} da pilha ${source.name} para a pilha ${target.name}`);

        // Mova n-1 discos da auxiliar para o destino, usando origem como auxiliar
        moveDisks(n - 1, auxiliary, target, source);
    }
}

// Inicializar as pilhas
const stack1 = new Stack();
stack1.name = "P1";
const stack2 = new Stack();
stack2.name = "P2";
const stack3 = new Stack();
stack3.name = "P3";

// Carregar a pilha stack1 com os discos 1, 2 e 3
stack1.push(3);
stack1.push(2);
stack1.push(1);

// Mensagem inicial
console.log("A pilha P1 está carregada com os discos [3, 2, 1], e as pilhas P2 e P3 estão vazias.");

// Resolver o problema
moveDisks(stack1.size(), stack1, stack3, stack2);

// Mensagem final
console.log("A pilha P3 está organizada e as pilhas P1 e P2 estão vazias.");