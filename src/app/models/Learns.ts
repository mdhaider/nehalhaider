export class Learns {
     objectId : string;
	 title : string;
	 linkToPdf : string;
	 description : string;
	 learnId : number;
	 createdAt : string;
	 updatedAt : string;

	 constructor(learns: any) {
		 this.objectId= learns.objectId;
		 this.title= learns.title;
		 this.learnId= learns.learnId;
		 this.linkToPdf= learns.linkToPdf;
		 this.description= learns.description;
		 this.createdAt= learns.createdAt;
		 this.updatedAt= learns.updatedAt;
	 }
}