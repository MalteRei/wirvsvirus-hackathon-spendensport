import { Injectable } from '@angular/core';
import { IGoal } from '../models/IGoal';
import { Goal } from '../models/Goal';
import { GoalStoreService } from './goal-store.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GoalCreationService {

  private GoalCreationState = GoalCreationState.Goalcreation;
  public get goalCreationState() {
    return this.GoalCreationState;
  }
  private ShowGoalCreationDialog = false;
  public get showGoalCreationDialog() {
    return this.ShowGoalCreationDialog;
  }
  public set showGoalCreationDialog(value) {
    this.ShowGoalCreationDialog = value;
  }

  private IsGoalCreationDialogVisible = false;
  public get isGoalCreationDialogVisible() {
    return this.IsGoalCreationDialogVisible;
  }
  public set isGoalCreationDialogVisible(value) {
    this.IsGoalCreationDialogVisible = value;
  }


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
    console.log('submit goal');
    console.dir(this.GoalToCreate);
    this.goalStoreService.addGoal(this.GoalToCreate);
    this.GoalToCreate
      = new Goal('mein Ziel',
        5, false, 'https://www.betterplace.org/', new Date(), 'https://png.pngtree.com/svg/20170118/donation_604080.png');
    console.dir(this.GoalToCreate);

    this.ShowGoalCreationDialog = false;
    this.GoalCreationState = GoalCreationState.Goalcreation;
  }

  public showDonationSelection() {
    this.GoalCreationState = GoalCreationState.Donationselection;
  }

  public showGoalCreation() {
    this.GoalCreationState = GoalCreationState.Goalcreation;

  }
}


export enum GoalCreationState {
  Goalcreation,
  Donationselection
}
