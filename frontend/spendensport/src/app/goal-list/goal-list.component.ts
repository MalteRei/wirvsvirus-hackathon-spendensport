import { Component, OnInit, Input } from '@angular/core';
import { GoalStoreService } from '../services/goal-store.service';
import { IGoal } from '../models/IGoal';
import { GoalCreationService } from '../services/goal-creation.service';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {

  private Goals: Array<IGoal>;
  public get goals(): Array<IGoal> {
    return this.Goals;
  }
  public get showGoalCreateButton() {
    return !this.goalCreationService.isGoalCreationDialogVisible;
  }


  constructor(private goalStoreService: GoalStoreService, private goalCreationService: GoalCreationService) {
    this.Goals = goalStoreService.goals;
  }

  ngOnInit(): void {
  }

  public onComplete(goal: IGoal) {
    goal.done = true;
  }

  public deleteGoal(goal: IGoal) {
    this.goalStoreService.removeGoal(goal);
  }

  public createGoalButtonClicked() {
    this.goalCreationService.showGoalCreation();
    this.goalCreationService.showGoalCreationDialog = true;
  }


}
