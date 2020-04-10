import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryPaneComponent } from './primary-pane.component';

describe('PrimaryPaneComponent', () => {
  let component: PrimaryPaneComponent;
  let fixture: ComponentFixture<PrimaryPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
