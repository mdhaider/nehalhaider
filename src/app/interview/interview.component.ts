import { Component, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { InterviewService } from '../interview.service';
import { InterviewRequest } from '../models/InterviewRequest';

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent  {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  myForm!: FormGroup;
  selected= false;
  @ViewChild('chipList', { static: true }) chipList:any;
  GradeArray: any = ['Android', 'Java', 'Kotlin', 'DS & Algo', 'Other'];
  SubjectsArray: Subject[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private interviewService: InterviewService, public fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm()
  }

    /* Reactive form */
    reactiveForm() {
      this.myForm = this.fb.group({
        question: ['', [Validators.required]],
        answer: ['', ''],
        language: [''],
        level: ['Basic'],
        tags: [this.SubjectsArray]
      })
    }
  
  
        /* Add dynamic languages */
    add(event: MatChipInputEvent): void {
      const input = event.input;
      const value = event.value;
      // Add language
      if ((value || '').trim() && this.SubjectsArray.length < 5) {
        this.SubjectsArray.push({ name: value.trim() })
      }
      // Reset the input value
      if (input) {
        input.value = '';
      }
    }
  
    /* Remove dynamic languages */
    remove(subject: Subject): void {
      const index = this.SubjectsArray.indexOf(subject);
      if (index >= 0) {
        this.SubjectsArray.splice(index, 1);
      }
    }  
  
    /* Handle form errors in Angular 8 */
    public errorHandling = (control: string, error: string) => {
      return this.myForm.controls[control].hasError(error);
    }
  
    submitForm() {
      console.log(this.myForm.value);
    const formValue = this.myForm.value;
    this.interviewService.saveInterViewQuestions(new InterviewRequest(formValue.question, formValue.answer, formValue.level,formValue.language,
      formValue.tags)).subscribe({
      next: (result: any) => {
        console.log('result', result);
        this.myForm.reset();
      },
      error: (err: any) => {
        console.log(err);
        this.myForm.reset();
      },
      complete: () => {
        console.log('complete');
        this.myForm.reset();
      },
    });
  }

  reset(){
    this.myForm.reset();
  
  }

}
