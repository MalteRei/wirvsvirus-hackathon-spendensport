import { Component, OnInit, Input } from '@angular/core';
import { IDonation } from '../models/IDonation';
import { ILink } from '../models/ILink';
import { GoalCreationService } from '../services/goal-creation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation-tile',
  templateUrl: './donation-tile.component.html',
  styleUrls: ['./donation-tile.component.css']
})
export class DonationTileComponent implements OnInit {

  @Input() donation: IDonation | undefined;
  constructor(private goalCreationService: GoalCreationService ) {}

  ngOnInit(): void {
  }

  public getLinkToDonate(): string {
    return this.donation.links.find( (value: ILink) => value.rel === 'new_donation')?.href;
  }

  public chooseOrganization(): void {
    this.goalCreationService.goalToCreate.linkUrlToDonate = this.getLinkToDonate();
    this.goalCreationService.goalToCreate.linkUrlToDonateImage = this.donation.carrier.picture.links[0].href;
    this.goalCreationService.submitGoal();

  }
}
