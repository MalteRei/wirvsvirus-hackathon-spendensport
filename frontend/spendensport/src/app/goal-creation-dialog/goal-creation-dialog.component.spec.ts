import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalCreationDialogComponent } from './goal-creation-dialog.component';

describe('GoalCreationDialogComponent', () => {
  let component: GoalCreationDialogComponent;
  let fixture: ComponentFixture<GoalCreationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalCreationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
