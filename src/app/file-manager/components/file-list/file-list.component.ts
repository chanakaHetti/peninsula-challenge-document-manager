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
  filteredFileItems: FileItem[] = [];
  sortBy: 'name' | 'date' = 'name';
  sortOrder: 'asc' | 'desc' = 'asc';

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

  sort(sortBy: 'name' | 'date', sortOrder: 'asc' | 'desc'): void {
    console.log('sortBy', sortBy, sortOrder);
    this.filteredFileItems.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return sortOrder === 'asc'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(b.name);
        case 'date':
          const dateA = a.added ? new Date(a.added).getTime() : 0;
          const dateB = b.added ? new Date(b.added).getTime() : 0;
          return sortOrder === 'asc' ? dateB - dateA : dateA - dateB;
        default:
          return 0;
      }
    });
  }

  onSortChange(value: 'name' | 'date'): void {
    this.sortBy = value;
    this.sort(value, this.sortOrder);
  }

  onSortOrderChange(value: 'asc' | 'desc'): void {
    this.sortOrder = value;
    this.sort(this.sortBy, value);
  }
}
