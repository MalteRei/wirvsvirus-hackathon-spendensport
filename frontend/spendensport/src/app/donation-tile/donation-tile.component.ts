import { Component, OnInit, Input } from '@angular/core';
import { IDonation } from '../models/IDonation';
import { ILink } from '../models/ILink';

@Component({
  selector: 'app-donation-tile',
  templateUrl: './donation-tile.component.html',
  styleUrls: ['./donation-tile.component.css']
})
export class DonationTileComponent implements OnInit {

  @Input() donation: IDonation | undefined;
   
  constructor() { }

  ngOnInit(): void {
  }

  public getLinkToDonate(): string {
    return this.donation.links.find( (value: ILink) => value.rel === 'new_donation')?.href;
  }
}
