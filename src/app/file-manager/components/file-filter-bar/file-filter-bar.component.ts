import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SortBy, SortOrder } from 'src/app/models/file';

@Component({
  selector: 'app-file-filter-bar',
  templateUrl: './file-filter-bar.component.html',
  styleUrls: ['./file-filter-bar.component.scss'],
})
export class FileFilterBarComponent {
  @Input() sortBy!: SortBy;
  @Input() sortOrder!: SortOrder;
  @Output() filterChange = new EventEmitter<string>();
  @Output() sortDirectionChange = new EventEmitter<SortBy>();
  @Output() sortOrderChange = new EventEmitter<SortOrder>();

  onFilterChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.filterChange.emit(value);
  }

  onSortChange(event: Event): void {
    const sortValue = (event.target as HTMLInputElement).value as SortBy;
    this.sortDirectionChange.emit(sortValue);
  }

  onSortOrderChange(event: Event): void {
    const sortValue = (event.target as HTMLInputElement).value as SortOrder;
    this.sortOrderChange.emit(sortValue);
  }
}
