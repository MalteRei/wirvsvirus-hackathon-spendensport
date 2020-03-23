import { Injectable, OnDestroy, OnInit, HostListener } from '@angular/core';
import { IGoal } from '../models/IGoal';
import { Goal } from '../models/Goal';
import { element } from 'protractor';
import { IObserver } from '../models/IObserver';
import { IObservable } from '../models/IObservable';

@Injectable({
  providedIn: 'root'
})
export class GoalStoreService implements IObserver {
  private static readonly keyForGoals = 'mygoals';

  private Goals: Array<IGoal> = [];

  public get goals(): Array<IGoal> {
    return this.Goals;
  }
  constructor() {
    const loadedFromStorageString = localStorage.getItem(GoalStoreService.keyForGoals);
    const loadedFromStorage = JSON.parse(loadedFromStorageString);
    if (loadedFromStorage != null) {
      for (const key in loadedFromStorage) {
        if (loadedFromStorage.hasOwnProperty(key)) {
          const goalToAdd = Goal.fromJSON(loadedFromStorage[key]);
          goalToAdd.registerObserver(this);
          this.Goals.push(goalToAdd);
        }
      }
    }
  }
  onChange(changedObject: IObservable, key: string, value: any) {
    this.onGoalChange();

  }



  public onGoalChange() {
    localStorage.setItem(GoalStoreService.keyForGoals, JSON.stringify(this.goals));
  }

  public addGoal(goalToAdd: IGoal) {
    goalToAdd.registerObserver(this);
    this.Goals.push(goalToAdd);
    this.onGoalChange();
  }

  public removeGoal(goalToRemove: IGoal) {
    const index = this.Goals.indexOf(goalToRemove);
    if (index > -1) {
      this.Goals[index].unregisterObserver(this);
      this.Goals.splice(index, 1);
      this.onGoalChange();
    }
  }
}
