import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileFilterBarComponent } from './file-filter-bar.component';

describe('FileFilterBarComponent', () => {
  let component: FileFilterBarComponent;
  let fixture: ComponentFixture<FileFilterBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileFilterBarComponent]
    });
    fixture = TestBed.createComponent(FileFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
