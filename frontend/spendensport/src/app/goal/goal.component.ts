import { Component, OnInit } from '@angular/core';
import { IGoal } from '../models/IGoal';
import { Goal } from '../models/Goal';
import { GoalStoreService } from '../services/goal-store.service';
import {Router} from '@angular/router';
import { GoalCreationService } from '../services/goal-creation.service';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {


  public get currentGoal(): IGoal {
    return this.goalCreationService.goalToCreate;
  }
  public set currentGoal(value: IGoal) {
    this.goalCreationService.goalToCreate = value;
  }

  constructor(private goalCreationService: GoalCreationService) { }


  ngOnInit(): void {
  }

  public submitGoal(): void {
    this.goalCreationService.showDonationSelection();
  }
}
