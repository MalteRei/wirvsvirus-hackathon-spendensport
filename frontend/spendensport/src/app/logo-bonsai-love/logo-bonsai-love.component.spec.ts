import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoBonsaiLoveComponent } from './logo-bonsai-love.component';

describe('LogoBonsaiLoveComponent', () => {
  let component: LogoBonsaiLoveComponent;
  let fixture: ComponentFixture<LogoBonsaiLoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoBonsaiLoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoBonsaiLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
