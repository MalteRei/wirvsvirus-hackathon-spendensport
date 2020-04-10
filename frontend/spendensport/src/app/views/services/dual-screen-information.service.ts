import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DualScreenInformationService {

  public static readonly ns = '__foldables__';
  private Spanning: SpanningMode = 'single-fold-vertical';
  private FoldSize = 0;
  private BrowserShellSize = 0;
  private Segments: ISegment[] = null;
  private needsDispatch = false;
  private eventTarget: DocumentFragment;


  constructor() {

    this.Spanning = sessionStorage.getItem(`${DualScreenInformationService.ns}-spanning`) as SpanningMode || 'none';
    this.FoldSize = +sessionStorage.getItem(`${DualScreenInformationService.ns}-fold-size`) || 0;
    this.BrowserShellSize = +sessionStorage.getItem(`${DualScreenInformationService.ns}-browser-shell-size`) || 0;

    this.eventTarget = document.createDocumentFragment();

    // Web-based emulator runs this polyfill in an iframe, we need to
    // communicate emulator state changes to the site.
    // Should only be registered once (in CSS or JS polyfill, not both).
    window.addEventListener('message', ev => {
      if (ev.data.action === 'update') {
        Object.assign(this, ev.data.value);
      }
    });
    window.addEventListener('resize', () => this.debounce(this.invalidate(), 200));

  }

 
  public addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void {
    this.eventTarget.addEventListener(type, listener, options);
  }

  public removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void {
    this.eventTarget.removeEventListener(type, callback, options);
  }



  public dispatchEvent(event: Event): boolean {
    if (event.type !== 'change') {
      return;
    }
    const methodName = `on${event.type}`;
    if (typeof this[methodName] === 'function') {
      this[methodName](event);
    }
    return this.eventTarget.dispatchEvent(event);
  }

  public get foldSize(): number {
    return this.FoldSize;
  }

  public set foldSize(foldSize: number) {
    sessionStorage.setItem(`${DualScreenInformationService.ns}-fold-size`, foldSize.toString());
    this.FoldSize = foldSize;
    this.invalidate();

  }

  public get browserShellSize(): number {
    return this.BrowserShellSize;
  }

  public set browserShellSize(browserShellSize: number) {
    sessionStorage.setItem(`${DualScreenInformationService.ns}-browser-shell-size`, browserShellSize.toString());
    this.BrowserShellSize = browserShellSize;
    this.invalidate();
  }

  public get spanning(): SpanningMode {
    return this.Spanning;
  }

  public set spanning(spanning: SpanningMode) {
    sessionStorage.setItem(`${DualScreenInformationService.ns}-spanning`, spanning);
    this.Spanning = spanning;
    this.invalidate();
  }


  public set segments(segments: ISegment[]) {
    this.Segments = segments;
  }

  public getTwoLargestSegments(): ISegment[] {
    const segments = this.windowSegments;
    if(segments.length > 2) {
      const twoLargestSegments = [null, null];
      let largestSize = 0;
      for (const segment of segments) {
        const segmentSize = segment.height * segment.width;
        if(segmentSize >= largestSize) {
          largestSize = segmentSize;
          twoLargestSegments[0] = twoLargestSegments[1];
          twoLargestSegments[1] = segment;
        }
      }
      console.dir(twoLargestSegments);
      return twoLargestSegments;
    } else {
      return segments;
    }
  }

  public get windowSegments(): ISegment[] {
    // TODO: replace with window.getWindowSegments() once it is a web standard
    if (this.Segments !== null && this.Segments.length > 0) {
      return this.Segments;
    }
    if (this.spanning === 'none') {
      return [
        new Segment(window.innerWidth, window.innerHeight, 0, 0)
      ];
    }
    if (this.spanning === 'single-fold-horizontal') {
      const screenCenter = (window.innerHeight - this.browserShellSize) / 2;
      const width = window.innerWidth;
      return [
        new Segment(width, screenCenter - this.foldSize / 2, 0, 0),
        new Segment(width, this.foldSize, screenCenter - this.foldSize / 2, 0),
        new Segment(width, window.innerHeight, screenCenter + this.foldSize / 2, 0 )
      ];
    }
    if (this.spanning === 'single-fold-vertical') {
      const width = window.innerWidth / 2 - this.foldSize / 2;
      const height = window.innerHeight;
      return [
        new Segment(width, height, 0, 0),
        new Segment(this.foldSize, height, 0, width),
        new Segment(width, height, 0, window.innerWidth / 2 + this.foldSize / 2)
      ];
    }
  }


  /**
   * Returns a function that won't call `fn` if it was invoked at a
   * faster interval than `wait`.
   */
  public debounce(fn: any, wait: number) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, arguments), wait);
    };
  }
  public async invalidate() {
    if (!this.needsDispatch) {
      this.needsDispatch = true;
      this.needsDispatch = await Promise.resolve(false);
      this.dispatchEvent(new Event('change'));
    }
  }

}

export type SpanningMode = 'single-fold-horizontal' | 'single-fold-vertical' | 'none';

/*
export enum SpanningMode {
  SingleFoldHorizontal = 'single-fold-horizontal',
  SingleFoldVertical = 'single-fold-vertical',
  None = 'none'
}*/

export interface ISegment {
  width: number;
  height: number;
  top: number;
  left: number;
}


export class Segment implements ISegment {
  constructor(width: number, height: number, top: number, left: number) {
    this.width = width;
    this.height = height;
    this.top = top;
    this.left = left;
  }
  private Width: number;
  public get width(): number {
    return this.Width;
  }
  public set width(value: number) {
    this.Width = value;
  }
  private Height: number;
  public get height(): number {
    return this.Height;
  }
  public set height(value: number) {
    this.Height = value;
  }
  private Top: number;
  public get top(): number {
    return this.Top;
  }
  public set top(value: number) {
    this.Top = value;
  }
  private Left: number;
  public get left(): number {
    return this.Left;
  }
  public set left(value: number) {
    this.Left = value;
  }
}
