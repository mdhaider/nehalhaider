export class QuestionsList {
     objectId : string;
	 question : string;
	 answer : string;
	 level : string;
	 language : string;
	 createdAt : string;
	 updatedAt : string;
	 

	 constructor(learns: any) {
		 this.objectId= learns.objectId;
		 this.question= learns.question;
		 this.answer= learns.answer;
		 this.level= learns.level;
		 this.language= learns.language;
		 this.createdAt= learns.createdAt;
		 this.updatedAt= learns.updatedAt;
		
	 }
}