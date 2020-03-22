import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCheckboxComponent } from './todo-checkbox.component';

describe('TodoCheckboxComponent', () => {
  let component: TodoCheckboxComponent;
  let fixture: ComponentFixture<TodoCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
