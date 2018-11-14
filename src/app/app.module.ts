import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import {
  MatInputModule,
  MatButtonModule,
  MatDialogModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DetailsModalComponent } from './details-modal/details-modal.component';

@NgModule({
  declarations: [AppComponent, TodoComponent, DetailsModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    DragDropModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DetailsModalComponent]
})
export class AppModule {}
