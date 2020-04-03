import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { IDonation } from '../models/IDonation';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { IBetterplaceResponseProjects } from '../models/IBetterplaceResponseProjects';
import { takeUntil, retry } from 'rxjs/operators';
import { ISearchProvider } from '../interfaces/ISearchProvider';

@Injectable({
  providedIn: 'root'
})
export class BetterplaceSearchService implements OnDestroy, ISearchProvider<IDonation> {

  private ngUnsubscribe = new Subject();

  private CurrentSearchResults: ReplaySubject<IDonation[]> = new ReplaySubject(1);
  public currentSearchResults(): ReplaySubject<IDonation[]> {
    return this.CurrentSearchResults;
  }


  constructor(private configServices: ConfigService, private http: HttpClient) { }


  public search(query: string): ReplaySubject<IDonation[]> {
    this.http
    .get<IBetterplaceResponseProjects>(
      this.configServices.config.donationApiUrl
      + 'projects.json?facets=completed%3Afalse|closed%3Afalse|prohibit_donations%3Afalse&order=score%3Adesc|completed%3Aasc|rank%3Adesc|last_donation_at%3Adesc&q='+query)
      .pipe(retry(3))
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((searchResult: IBetterplaceResponseProjects) => {
        this.CurrentSearchResults.next(searchResult.data);
        return this.currentSearchResults;
      }, error => {
        // TODO: error handeling
      });
    return this.CurrentSearchResults;
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  
}
