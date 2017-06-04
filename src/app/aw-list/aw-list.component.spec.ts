import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwListComponent } from './aw-list.component';

describe('AwListComponent', () => {
  let component: AwListComponent;
  let fixture: ComponentFixture<AwListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
