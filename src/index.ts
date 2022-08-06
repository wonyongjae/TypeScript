// BlockChain example

//normal
// import * as crypto from "crypto";
//use 'tsconfig.json' -> '"esModuleInterop":true'
import { BlobOptions } from "buffer";
import crypto from "crypto";



interface BlockShape {
    hash:string;
    prevHash:string;
    height:number;
    data:string;
}

class Block implements BlockShape {
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string,
    ){
        this.hash = Block.calculateHash(prevHash, height, data);
    }

    static calculateHash(prevHash:string, height:number, data:string){

        // get hash code
        const toHash = `${prevHash}${height}${data}`;

        // return hash code use the crypto
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}


class BlockChain {
    private blocks: Block[];
    constructor(){
        this.blocks = [];
    }

    private getPrevHash(){
        if(this.blocks.length === 0) return "";
        return this.blocks[this.blocks.length - 1].hash;
    }
    public addBlock(data:string){
        const block = new Block(
            this.getPrevHash(), 
            this.blocks.length + 1, 
            data);
        this.blocks.push(block);
    }
    public getBlock(){
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