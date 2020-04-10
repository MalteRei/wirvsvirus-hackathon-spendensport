import { Component, OnInit, Input } from '@angular/core';
import { IGoal } from '../models/IGoal';
import { Goal } from '../models/Goal';
import { GoalStoreService } from '../services/goal-store.service';
import {Router} from '@angular/router';
import { GoalCreationService } from '../services/goal-creation.service';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-goal-create',
  templateUrl: './goal-create.component.html',
  styleUrls: ['./goal-create.component.css']
})
export class GoalCreateComponent implements OnInit {

  public get currentGoal(): IGoal {
    return this.goalCreationService.goalToCreate;
  }
  public set currentGoal(value: IGoal) {
    this.goalCreationService.goalToCreate = value;
  }

  constructor(private goalCreationService: GoalCreationService) {  }

  private static readonly MinDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');


  public get minDate(): string {
    return GoalCreateComponent.MinDate;
  }


  ngOnInit(): void {
  }

  public set date(v: string) {
    const actualParsedDate = v ? new Date(v) : new Date();
    const normalizedParsedDate = new Date(actualParsedDate.getTime() + (actualParsedDate.getTimezoneOffset() * 60000));
    this.goalCreationService.goalToCreate.date = normalizedParsedDate;
  }


  public get date(): string {
    return formatDate(this.goalCreationService.goalToCreate.date, 'yyyy-MM-dd', 'en-US');
  }

  public submitGoal(): void {
    this.goalCreationService.showDonationSelection();
  }

  public handleBackToGoals(event: Event): void {
    this.goalCreationService.showGoalCreationDialog = false;
  }
}
