import { Component, OnInit, OnDestroy } from '@angular/core';
import { IBetterplaceResponseProjects } from '../models/IBetterplaceResponseProjects';
import { DonationService } from '../services/donation.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, ReplaySubject } from 'rxjs';
import { BetterplaceSearchService } from '../services/betterplace-search.service';
import { IDonation } from '../models/IDonation';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject();
  private ProjectDonations: IDonation[] = null;
  private ErrorLoading = false;

  public get errorLoading() {
    return this.ErrorLoading;
  }

  public get projectDonations(): IDonation[] {
    return this.ProjectDonations;
  }
  public set projectDonations(value: IDonation[]) {
    this.ProjectDonations = value;
  }
  constructor(private donationService: DonationService,public donationSearchService: BetterplaceSearchService) { }

  ngOnInit(): void {
    this.donationSearchService.currentSearchResults()
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(searchResults => this.ProjectDonations = searchResults);
    

    this.donationService.getDonationList().pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      result => {
        this.projectDonations = result.data;
        this.ErrorLoading = false;
      },
      error => {
        this.projectDonations = null;
        this.ErrorLoading = true;

      }
    );
  }

  public ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}

}
