import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwThumbnailComponent } from './aw-thumbnail.component';

describe('AwThumbnailComponent', () => {
  let component: AwThumbnailComponent;
  let fixture: ComponentFixture<AwThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
