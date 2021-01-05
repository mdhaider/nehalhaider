import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BitsComponent } from './bits/bits.component';
import { HomeComponent } from './home/home.component';
import { LearningsComponent } from './learnings/learnings.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'learnings', component: LearningsComponent},
  {path:'bits', component: BitsComponent},
  {path:'upload', component: UploadComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
