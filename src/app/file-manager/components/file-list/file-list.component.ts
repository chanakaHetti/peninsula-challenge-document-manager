import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss'],
})
export class FileListComponent implements OnInit {
  fileItems: FileItem[] = [];

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.fileService.getFiles().subscribe((files) => {
      console.log('files', files);
      this.fileItems = files.map((file) => {
        if (file.type === 'folder') {
          return { ...file, isOpen: false };
        }

        return file;
      });
    });
  }

  onOpenFolder(folder: FileItem): void {
    folder.isOpen = !folder.isOpen;
  }
}
