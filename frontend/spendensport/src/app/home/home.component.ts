import { Component, OnInit } from '@angular/core';
import { IGoal } from '../models/IGoal';
import { Goal } from '../models/Goal';
import { GoalStoreService } from '../services/goal-store.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private CurrentGoal: IGoal = new Goal('Mein Ziel', 0, false);

  public get currentGoal(): IGoal {
    return this.CurrentGoal;
  }
  public set currentGoal(value: IGoal) {
    this.CurrentGoal = value;
  }

  constructor(private goalStoreService: GoalStoreService,
              private router: Router) { }


  ngOnInit(): void {
  }

  public submitGoal() {
    this.goalStoreService.addGoal(this.CurrentGoal);
    this.goalStoreService.goals.forEach(goal=> console.dir(goal));
    this.CurrentGoal = new Goal('Mein Ziel', 0, false);
    this.router.navigate(['/goals']);
  }
}
