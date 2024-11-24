export type SortOrder = 'asc' | 'desc';
export type SortBy = 'name' | 'date' | 'size';
export type FileType = 'pdf' | 'doc' | 'csv' | 'mov' | 'folder';

export interface FileItem {
  type: FileType;
  name: string;
  added?: string;
  files?: FileItem[];
  isOpen?: boolean;
}
