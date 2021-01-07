export class InterviewRequest {
  question?: string;
  answer?: string;
  level?: string;
  language?: string;
  tags?: string[];

  constructor(
    question: string,
    answer: string,
    level: string,
    language: string,
    tags: string[]
  ) {
    this.question = question;
    this.answer = answer;
    this.level = level;
    this.language = language;
    this.tags = tags;
   
  }
}
