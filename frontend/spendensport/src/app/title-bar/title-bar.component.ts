import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  @Input() titleHeader = 'Bonsai';
  @Input() backLinkName: string | undefined;
  @Input() backLinkUrl: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
