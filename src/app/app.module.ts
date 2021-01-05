import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app-material/app-material.module';
import { UploadComponent } from './upload/upload.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LearningsComponent } from './learnings/learnings.component';
import { BitsComponent } from './bits/bits.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadComponent,
    NavbarComponent,
    LearningsComponent,
    BitsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFileUploaderModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
