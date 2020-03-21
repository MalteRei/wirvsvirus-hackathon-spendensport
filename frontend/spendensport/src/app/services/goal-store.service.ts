import { Injectable } from '@angular/core';
import { IGoal } from '../models/IGoal';

@Injectable({
  providedIn: 'root'
})
export class GoalStoreService {
  private Goals: Array<IGoal> = [];

  public get goals(): Array<IGoal> {
    return this.Goals;
  }
  constructor() { }

  public addGoal(goalToAdd: IGoal) {
    this.Goals.push(goalToAdd);
  }

  public removeGoal(goalToRemove: IGoal) {
    const index = this.Goals.indexOf(goalToRemove);
    if(index > -1) {
      this.Goals.splice(index, 1);
    }
  }
}
