export class LearnRequest{
    title?:string;
    linkToPdf?:string;
    description?:string;
    learnId?:number;

    constructor(title: string, linkToPdf: string, description:string,learnId:number  ){
        this.linkToPdf=title;
        this.title=title;
        this.description=description;
        this.learnId=learnId;
    }

}