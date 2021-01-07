import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BitsComponent } from './features/bits/bits.component';
import { HomeComponent } from './features/home/home.component';
import { InterviewComponent } from './features/interview/interview/interview.component';
import { LearningsComponent } from './features/learnings/learnings/learnings.component';
import { QuestionListComponent } from './features/question-list/question-list.component';
import { UploadComponent } from './features/upload/upload.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'interview', component: QuestionListComponent},
  {path:'learnings', component: LearningsComponent},
  {path:'bits', component: BitsComponent},
  {path:'uploadlrn', component: UploadComponent},
  {path:'uploadque', component: InterviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
