import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FileListComponent } from './file-manager/components/file-list/file-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/files', pathMatch: 'full' },
  { path: 'files', component: FileListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
