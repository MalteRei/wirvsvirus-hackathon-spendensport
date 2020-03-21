import { Component, OnInit } from '@angular/core';
import { GoalStoreService } from '../services/goal-store.service';
import { IGoal } from '../models/IGoal';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {

  public goals: Array<IGoal>;
  constructor(private goalStoreService: GoalStoreService) {
    this.goals = goalStoreService.goals;
    console.log('Goals:');
    goalStoreService.goals.forEach(goal=>console.dir(goal));
  }

  ngOnInit(): void {
  }

  public onComplete(goal: IGoal) {
    goal.done = true;
  }


}
