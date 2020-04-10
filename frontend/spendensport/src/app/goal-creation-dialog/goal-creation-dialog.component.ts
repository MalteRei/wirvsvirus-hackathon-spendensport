import { Component, OnInit } from '@angular/core';
import { GoalCreationService, GoalCreationState } from '../services/goal-creation.service';

@Component({
  selector: 'app-goal-creation-dialog',
  templateUrl: './goal-creation-dialog.component.html',
  styleUrls: ['./goal-creation-dialog.component.css']
})
export class GoalCreationDialogComponent implements OnInit {

  public readonly goalCreationStateEnum = GoalCreationState;

  public get goalCreationState(): GoalCreationState {
    return this.goalCreationService.goalCreationState;
  }

  constructor(private goalCreationService: GoalCreationService) { }

  ngOnInit(): void {
  }

}
