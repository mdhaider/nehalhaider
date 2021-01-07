import { Component, ViewChild } from '@angular/core';

import { LearnRequest } from '../../shared/LearnRequest';
import { LearningsService } from '../learnings/learnings.service'

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  req: LearnRequest = new LearnRequest('dfdf', 'dfdf');

  visible = true;
  selected= false;
  selectable = true;
  removable = true;
  addOnBlur = true;
  myForm!: FormGroup;
  GradeArray: any = [
    '8th Grade',
    '9th Grade',
    '10th Grade',
    '11th Grade',
    '12th Grade',
  ];
  SubjectsArray: Subject[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private learning: LearningsService, public fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm();
  }
  /* Reactive form */
  reactiveForm() {
    this.myForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]] 
    });
  }


  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  };

  submitForm() {
    console.log(this.myForm.value);
    const formValue = this.myForm.value;
    this.learning.saveLearnings(new LearnRequest(formValue.title, formValue.description)).subscribe({
      next: (result: any) => {
        console.log(result);
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

