import { Component, OnInit } from '@angular/core';
import { GoalCreationService } from '../services/goal-creation.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {


  public get ensureShowingGoalCreationDialog(): boolean {
    return this.goalCreationService.showGoalCreationDialog;
  }

  constructor(public goalCreationService: GoalCreationService) { }

  ngOnInit(): void {
  }

  public secondaryPaneVisibilityChangedEventHandler(visible: boolean): void {
    this.goalCreationService.isGoalCreationDialogVisible = visible;
  }

}
