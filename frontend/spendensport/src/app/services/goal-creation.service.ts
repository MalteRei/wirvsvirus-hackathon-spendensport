import { Injectable } from '@angular/core';
import { IGoal } from '../models/IGoal';
import { Goal } from '../models/Goal';
import { GoalStoreService } from './goal-store.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GoalCreationService {

  private GoalToCreate: IGoal
  = new Goal('mein Ziel', 5, false, 'https://www.betterplace.org/', new Date(), 'https://png.pngtree.com/svg/20170118/donation_604080.png');

  public get goalToCreate(): IGoal {
    return this.GoalToCreate;
  }
  public set goalToCreate(value: IGoal) {
    this.GoalToCreate = value;
  }

  constructor(private goalStoreService: GoalStoreService, private router: Router) { }

  public submitGoal() {
    this.goalStoreService.addGoal(this.GoalToCreate);
    this.GoalToCreate
    = new Goal('mein Ziel',
     5, false, 'https://www.betterplace.org/', new Date(), 'https://png.pngtree.com/svg/20170118/donation_604080.png');
    this.router.navigate(['/goals']);
  }

  public showDonationSelection() {
    this.router.navigate(['/donations']);
  }
}
