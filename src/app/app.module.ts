import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './features/home/home.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './core/app-material/app-material.module';
import { UploadComponent } from './features/upload//upload.component';
import { LearningsComponent } from './features/learnings/learnings/learnings.component';
import { BitsComponent } from './features/bits/bits.component';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { InterviewComponent } from './features/interview/interview/interview.component';
import { QuestionListComponent } from './features/question-list/question-list.component';
import { ResponsiveToolbarComponent } from './features/responsive-toolbar/responsive-toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadComponent,
    LearningsComponent,
    BitsComponent,
    InterviewComponent,
    QuestionListComponent,
    ResponsiveToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFileUploaderModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
