import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  @Input() titleHeader = 'Bonsai';
  @Input() backLinkName: string | undefined = undefined;
  @Input() backLinkUrl: string | undefined = undefined;
  @Output() backLinkClickedEmitter = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  public backLinkClicked(event: Event): void {
    this.backLinkClickedEmitter.emit(event);
  }

}
