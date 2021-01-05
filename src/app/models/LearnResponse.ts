import { Learns } from "./Learns";

export class LearnResponse {
    results: Learns[];

    constructor(res:any){
        this.results= res.results;
    }
}