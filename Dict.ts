type Words = { 
    [key: string]:string
 }

class Dict{
    private words: Words
    constructor(){
        this.words = {}
    }
    add(word: Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;
            console.log(`"${word.term}"를 추가합니다.(value: ${word.def})`);
        }else{
            console.log("이미 있는 단어입니다.");
        }
    }
    def(term:string){
        console.log(this.words[term]);
        return this.words[term];
    }

    delete(term:string){
        if(term in this.words){
            console.log(`${this.words[term]}를 삭제합니다.`);
            delete this.words[term];
        }
    }
    update(term:string, def:string){
        if(term in this.words){
            console.log(`기존 "${this.words[term]}"를 "${def}"로 변경합니다.`);
            this.words[term] = def;
        }else{
            console.log("존재하지 않습니다.");
        }

    }
    showAll(){
        console.log("--------현재 dict의 모든 단어--------")
        console.log(Object.values(this.words));
        console.log("-------------------------------------")
    }
    count(){
        console.log(`총 count: ${Object.keys(this.words).length}개`);
        return Object.keys(this.words).length;
    }
}

class Word {
    constructor(
        public term: string,
        public def : string
    ){}
}

const dict = new Dict();


const firstWord = new Word("첫번째", "first");
const secondWord = new Word("두번째", "second");
const thridWord = new Word("세번째", "third");
const forthWord = new Word("네번째", "forth");
const fifthWord = new Word("다섯번째", "fifth");

dict.add(firstWord);
dict.def("첫번째");

dict.add(secondWord);
dict.delete("두번째");

dict.update("첫번째", "하나");

dict.add(thridWord);
dict.add(forthWord);
dict.add(fifthWord);

dict.showAll();
dict.count();

