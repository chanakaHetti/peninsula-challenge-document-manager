import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileItem } from '../models/file';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private http: HttpClient) {}

  getFiles(): Observable<FileItem[]> {
    return this.http.get<FileItem[]>('assets/mock-data/documents.json');
  }
}
