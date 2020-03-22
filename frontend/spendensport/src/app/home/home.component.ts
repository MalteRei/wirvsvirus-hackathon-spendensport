import { Component, OnInit } from '@angular/core';
import { IGoal } from '../models/IGoal';
import { Goal } from '../models/Goal';
import { GoalStoreService } from '../services/goal-store.service';
import {Router} from '@angular/router';
import { GoalCreationService } from '../services/goal-creation.service';


@Component({
  selector: 'app-goal',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public get currentGoal(): IGoal {
    return this.goalCreationService.goalToCreate;
  }
  public set currentGoal(value: IGoal) {
    this.goalCreationService.goalToCreate = value;
  }

  constructor(private goalCreationService: GoalCreationService) { }

  private static MinDate = new Date();
  

  public get minDate(): Date {
    return HomeComponent.MinDate;
  }

  public isMobile(): boolean{
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(window.navigator.userAgent);
    return isMobile;
  }

  ngOnInit(): void {
  }

  public submitGoal(): void {
    this.goalCreationService.showDonationSelection();
  }
}
