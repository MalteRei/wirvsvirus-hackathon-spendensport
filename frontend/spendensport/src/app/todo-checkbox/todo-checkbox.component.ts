import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-checkbox',
  templateUrl: './todo-checkbox.component.html',
  styleUrls: ['./todo-checkbox.component.css']
})
export class TodoCheckboxComponent implements OnInit {

  @Input() todoContent: string;

  private Model: boolean = false;
  private ModelChange: EventEmitter<boolean> = new EventEmitter();

  @Output() public get modelChange(): EventEmitter<boolean> {
    return this.ModelChange;
  }

  public get model(): boolean {
    return this.Model;
  }

  @Input() public set model(value: boolean) {
    this.Model = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

  onCheckboxChange(newValue: boolean): void {
    this.ModelChange.emit(this.model);
  }
}
