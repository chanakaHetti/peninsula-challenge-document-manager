import { Injectable } from '@angular/core';

import { FileItem, SortBy, SortOrder } from '../models/file';

@Injectable({
  providedIn: 'root',
})
export class FileSortService {
  sort(items: FileItem[], sortBy: SortBy, sortOrder: SortOrder): FileItem[] {
    return this.recursiveSort(items, sortBy, sortOrder);
  }

  private recursiveSort(
    items: FileItem[],
    sortBy: SortBy,
    sortOrder: SortOrder
  ): FileItem[] {
    items.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return sortOrder === 'asc'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);

        case 'date':
          const dateA = a.added ? new Date(a.added).getTime() : 0;
          const dateB = b.added ? new Date(b.added).getTime() : 0;
          return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;

        case 'size':
          const sizeA = a.files?.length || 0;
          const sizeB = b.files?.length || 0;
          return sortOrder === 'asc' ? sizeA - sizeB : sizeB - sizeA;

        default:
          return 0;
      }
    });

    items.forEach((item) => {
      if (item.type === 'folder' && item.files && item.files.length > 0) {
        item.files = this.recursiveSort(item.files, sortBy, sortOrder);
      }
    });

    return items;
  }
}
