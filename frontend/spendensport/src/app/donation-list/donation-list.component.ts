import { Component, OnInit, OnDestroy } from '@angular/core';
import { IBetterplaceResponseProjects } from '../models/IBetterplaceResponseProjects';
import { DonationService } from '../services/donation.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject();
  private ProjectDonations: IBetterplaceResponseProjects = null;
  private ErrorLoading = false;

  public get errorLoading() {
    return this.ErrorLoading;
  }

  public get projectDonations(): IBetterplaceResponseProjects {
    return this.ProjectDonations;
  }
  public set projectDonations(value: IBetterplaceResponseProjects) {
    this.ProjectDonations = value;
  }
  constructor(private donationService: DonationService) { }

  ngOnInit(): void {
    this.donationService.getDonationList().pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      result => {
        this.projectDonations = result;
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
