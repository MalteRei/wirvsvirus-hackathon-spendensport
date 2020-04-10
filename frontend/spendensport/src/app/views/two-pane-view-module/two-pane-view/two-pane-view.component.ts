import { AfterContentInit, Component, ContentChildren, ElementRef, OnInit, QueryList } from '@angular/core';
import { TwoPaneViewContentDirective } from '../two-pane-view-content';

@Component({
  selector: 'app-two-pane-view',
  templateUrl: './two-pane-view.component.html',
  styleUrls: ['./two-pane-view.component.css']
})
export class TwoPaneViewComponent implements OnInit, AfterContentInit {


  @ContentChildren(TwoPaneViewContentDirective, {read: ElementRef}) children: QueryList<ElementRef>;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.dir(this.children);
    this.children.forEach(element => {
      console.dir(element);
    });
  }

}
