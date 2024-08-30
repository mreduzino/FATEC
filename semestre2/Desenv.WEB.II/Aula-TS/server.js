"use strict";
// npm i express
// npm i -D @types/node @types/express
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`);
});

// npx tsc
// node server.js
// npm i -D nodemon ts-node
// Para remover - npm uninstall ts-node-dev