"use strict";
// BlockChain example
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class Block {
    constructor(prevHash, height, data) {
        this.prevHash = prevHash;
        this.height = height;
        this.data = data;
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash, height, data) {
        // get hash code
        const toHash = `${prevHash}${height}${data}`;
        // return hash code use the crypto
        return crypto_1.default.createHash("sha256").update(toHash).digest("hex");
    }
}
class BlockChain {
    constructor() {
        this.blocks = [];
    }
    getPrevHash() {
        if (this.blocks.length === 0)
            return "";
        return this.blocks[this.blocks.length - 1].hash;
    }
    addBlock(data) {
        const block = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(block);
    }
    getBlock() {
        // return this.blocks;
        // 기존 블록을 가진 새로운 array 리턴
        return [...this.blocks];
    }
}
const blockChain = new BlockChain();
blockChain.addBlock("First one");
blockChain.addBlock("Second one");
blockChain.addBlock("Third one");
blockChain.addBlock("Fourth one");
blockChain.getBlock().push(new Block("ccccc", 657, "dfjkgnsdl"));
console.log(blockChain.getBlock());
