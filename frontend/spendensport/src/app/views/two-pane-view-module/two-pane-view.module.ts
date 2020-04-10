import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TwoPaneViewContentDirective } from './two-pane-view-content';
import { TwoPaneViewRoutingModule } from './two-pane-view-routing.module';
import { TwoPaneViewComponent } from './two-pane-view/two-pane-view.component';



@NgModule({
  declarations: [TwoPaneViewComponent, TwoPaneViewContentDirective],
  imports: [
    CommonModule,
    TwoPaneViewRoutingModule,
  ],
  exports: [
    TwoPaneViewComponent,
    TwoPaneViewContentDirective
  ],

})
export class TwoPaneViewModule { }
