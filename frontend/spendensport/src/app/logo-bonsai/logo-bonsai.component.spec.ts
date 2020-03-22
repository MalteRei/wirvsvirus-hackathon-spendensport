import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoBonsaiComponent } from './logo-bonsai.component';

describe('LogoBonsaiComponent', () => {
  let component: LogoBonsaiComponent;
  let fixture: ComponentFixture<LogoBonsaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoBonsaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoBonsaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
