import { Component, OnInit, Input, TemplateRef, ViewChild, ViewContainerRef, AfterViewInit, AfterContentChecked, AfterContentInit, ChangeDetectorRef, EmbeddedViewRef } from '@angular/core';
import { ISegment, Segment } from '../services/dual-screen-information.service';

@Component({
  selector: 'app-primary-pane',
  templateUrl: './primary-pane.component.html',
  styleUrls: ['./primary-pane.component.css']
})
export class PrimaryPaneComponent implements OnInit, AfterViewInit {

  @ViewChild('viewContainer', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;
  
  private embeddedViewRef: EmbeddedViewRef<any> = null;

  private Segment: ISegment = new Segment(0, 0, 0, 0);
  public get segment(): ISegment {
    return this.Segment;
  }
  @Input() public set segment(value: ISegment) {
    this.Segment = value;
  }
  
  private ContentTemplateRef: TemplateRef<any> = undefined;
  public get contentTemplateRef(): TemplateRef<any> {
    return this.ContentTemplateRef;
  }
  @Input() public set contentTemplateRef(value: TemplateRef<any>) {
    if(value instanceof TemplateRef) {
      this.ContentTemplateRef = value;
      this.renderView();
    }
    
  }
  color = '#' + Math.floor(Math.random()*16777215).toString(16);
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.renderView();
  }

  private renderView() {
    if(this.ContentTemplateRef && this.viewContainerRef) {
      if(this.embeddedViewRef) {
        this.embeddedViewRef.destroy();
      }
      this.viewContainerRef.clear();
      this.embeddedViewRef = this.viewContainerRef.createEmbeddedView(this.ContentTemplateRef);
      this.changeDetectorRef.detectChanges();
    }
  }

  ngOnInit(): void {
  }

}
