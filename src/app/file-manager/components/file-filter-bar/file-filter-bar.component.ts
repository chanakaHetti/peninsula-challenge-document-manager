import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-filter-bar',
  templateUrl: './file-filter-bar.component.html',
  styleUrls: ['./file-filter-bar.component.scss'],
})
export class FileFilterBarComponent {
  @Output() filterChange = new EventEmitter<string>();
  @Output() sortDirectionChange = new EventEmitter<'name' | 'date'>();
  @Output() sortOrderChange = new EventEmitter<'asc' | 'desc'>();

  onFilterChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.filterChange.emit(value);
  }

  onSortChange(event: Event): void {
    const sortValue = (event.target as HTMLInputElement).value as
      | 'name'
      | 'date';
    this.filterChange.emit(sortValue);
  }

  onSortOrderChange(event: Event): void {
    const sortValue = (event.target as HTMLInputElement).value as
      | 'asc'
      | 'desc';
    this.sortOrderChange.emit(sortValue);
  }
}
