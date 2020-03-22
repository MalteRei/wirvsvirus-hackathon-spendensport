import { Component, OnInit } from '@angular/core';
import { IGoal } from '../models/IGoal';
import { Goal } from '../models/Goal';
import { GoalStoreService } from '../services/goal-store.service';
import {Router} from '@angular/router';
import {MatDatepicker} from '@angular/material/datepicker';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {

  private CurrentGoal: IGoal = new Goal('Mein Ziel', 0, false, new Date());

  public get currentGoal(): IGoal {
    return this.CurrentGoal;
  }
  public set currentGoal(value: IGoal) {
    this.CurrentGoal = value;
  }

  constructor(private goalStoreService: GoalStoreService,
              private router: Router,) { }


  ngOnInit(): void {
  }

  public submitGoal() {
    this.goalStoreService.addGoal(this.CurrentGoal);
    this.goalStoreService.goals.forEach(goal=> console.dir(goal));
    this.CurrentGoal = new Goal('Mein Ziel', 0, false, new Date());
    this.router.navigate(['/goals']);
  }
}
