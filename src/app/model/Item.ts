export class Item{
    name:string;
    language:string;
    file:any;

    constructor(name,language,file){
        this.name=name;
        this.language=language;
        this.file=file;
    }
}
export class Serie extends Item{
    nameOfCap:string;
    sessionOfCap:string;
    numberOfCap:string;
    
    constructor(name,language,file,nameOfCap,sessionOfCap,numberOfCap){
        super(name,language,file);
        this.nameOfCap=nameOfCap;
        this.sessionOfCap=sessionOfCap;
        this.numberOfCap=nameOfCap;
    }
}
export class Film extends Item{
        constructor(name,language,file){
        super(name,language,file);
    }
}