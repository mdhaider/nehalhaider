import { DocFile } from "./DocFile";

export class Learns {
     objectId : string;
	 title : string;
	 description : string;
	 createdAt : string;
	 updatedAt : string;
	 docFile:DocFile;

	 constructor(learns: any) {
		 this.objectId= learns.objectId;
		 this.title= learns.title;
		 this.description= learns.description;
		 this.createdAt= learns.createdAt;
		 this.updatedAt= learns.updatedAt;
		 this.docFile= learns.docFile
	 }
}