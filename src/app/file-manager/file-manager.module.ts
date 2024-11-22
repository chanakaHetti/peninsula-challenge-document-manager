import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileListComponent } from './components/file-list/file-list.component';
import { FileFilterBarComponent } from './components/file-filter-bar/file-filter-bar.component';



@NgModule({
  declarations: [
    FileListComponent,
    FileFilterBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FileManagerModule { }
