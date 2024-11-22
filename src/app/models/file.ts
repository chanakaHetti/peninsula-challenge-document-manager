export interface FileItem {
  type: 'pdf' | 'doc' | 'csv' | 'mov' | 'folder';
  name: string;
  added?: string;
  files?: FileItem[];
  isOpen?: boolean;
}
