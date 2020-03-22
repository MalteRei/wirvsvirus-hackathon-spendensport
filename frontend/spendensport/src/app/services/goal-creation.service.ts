import { Injectable } from '@angular/core';
import { IGoal } from '../models/IGoal';
import { Goal } from '../models/Goal';
import { GoalStoreService } from './goal-store.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GoalCreationService {

  private GoalToCreate: IGoal = new Goal('mein Ziel', 5, false, 'https://www.betterplace.org/');

  public get goalToCreate(): IGoal {
    return this.GoalToCreate;
  }
  public set goalToCreate(value: IGoal) {
    this.GoalToCreate = value;
  }

  constructor(private goalStoreService: GoalStoreService, private router: Router) { }

  public submitGoal() {
    this.goalStoreService.addGoal(this.GoalToCreate);
    this.GoalToCreate = new Goal('mein Ziel', 5, false, 'https://www.betterplace.org/');
    this.router.navigate(['/goals']);
  }

  public showDonationSelection() {
    this.router.navigate(['/donations']);
  }
}
