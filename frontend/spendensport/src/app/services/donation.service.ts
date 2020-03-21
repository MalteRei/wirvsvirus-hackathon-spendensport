import { Injectable, OnDestroy } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { IDonation } from '../models/IDonation';
import { Subject, Observable } from 'rxjs';
import { takeUntil, retry} from 'rxjs/operators';
import { IBetterplaceResponseProjects } from '../models/IBetterplaceResponseProjects';

@Injectable({
  providedIn: 'root'
})
export class DonationService implements OnDestroy {

  private ngUnsubscribe = new Subject();

  constructor(private configServices: ConfigService, private http: HttpClient) { }



  public getDonationList(): Observable<IBetterplaceResponseProjects> {
    return this.http
    .get<IBetterplaceResponseProjects>(
      this.configServices.config.donationApiUrl
      + 'projects.json?around=Germany&facets=completed%3Afalse|closed%3Afalse|prohibit_donations%3Afalse&order=rank%3ADESC&q=Corona')
    .pipe(takeUntil(this.ngUnsubscribe)).pipe(retry(3));
  }

  public ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}
}
