import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalListComponent } from './goal-list/goal-list.component';
import { DonationListComponent } from './donation-list/donation-list.component';
import { GoalCreateComponent } from './goal-create/goal-create.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';


const routes: Routes = [
  { path: 'donations', component: DonationListComponent },
  { path: 'goals', component: HomeScreenComponent},
  /*{
    path: 'goals',
    children: [
      { path: '', component: GoalListComponent, outlet: 'primary' },

      { path: '', component: GoalCreateComponent, outlet: 'secondary' },

    ]
  },*/
  // { path: 'goal', component: GoalCreateComponent },
  // { path: 'goal', component: GoalCreateComponent, outlet: 'secondary' },

  { path: '', redirectTo: '/goals', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
