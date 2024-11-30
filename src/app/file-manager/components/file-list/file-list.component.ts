import { Component, OnInit } from '@angular/core';

import { FileItem, SortBy, SortOrder } from 'src/app/models/file';
import { FileSortService } from 'src/app/services/file-sort.service';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss'],
})
export class FileListComponent implements OnInit {
  fileItems: FileItem[] = [];
  filteredFileItems: FileItem[] = [];
  sortBy: SortBy = 'name';
  sortOrder: SortOrder = 'asc';

  constructor(
    private fileService: FileService,
    private fileSortService: FileSortService
  ) {}

  ngOnInit(): void {
    this.fileService.getFiles().subscribe((files) => {
      console.log('files', files);
      this.fileItems = files.map((file) => {
        if (file.type === 'folder') {
          return { ...file, isOpen: false };
        }

        return file;
      });

      this.filteredFileItems = this.fileItems;
    });
  }

  onOpenFolder(folder: FileItem): void {
    folder.isOpen = !folder.isOpen;
  }

  onFilterChange(value: string): void {
    const searchTerm = value;
    this.filteredFileItems = this.fileItems.filter((file) =>
      file.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }

  sort(sortBy: SortBy, sortOrder: SortOrder): void {
    this.filteredFileItems = this.fileSortService.sort(
      this.filteredFileItems,
      sortBy,
      sortOrder
    );
  }

  onSortDirectionChange(value: SortBy): void {
    console.log(value);
    this.sortBy = value;
    this.sort(value, this.sortOrder);
  }

  onSortOrderChange(value: SortOrder): void {
    console.log(value);
    this.sortOrder = value;
    this.sort(this.sortBy, value);
  }
}
