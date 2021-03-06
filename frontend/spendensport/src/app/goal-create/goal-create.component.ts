import { Component, OnInit } from '@angular/core';
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

  constructor(private goalCreationService: GoalCreationService) { }

  private static readonly MinDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');


  public get minDate(): string {
    return GoalCreateComponent.MinDate;
  }


  public isMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(window.navigator.userAgent);
  }

  ngOnInit(): void {
  }

  public submitGoal(): void {
    this.goalCreationService.showDonationSelection();
  }
}
