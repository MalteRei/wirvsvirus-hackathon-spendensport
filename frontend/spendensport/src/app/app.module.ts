import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';

import {FormsModule} from '@angular/forms';
import { GoalListComponent } from './goal-list/goal-list.component';
import {Router} from '@angular/router';
import { DonationListComponent } from './donation-list/donation-list.component';
import { DonationTileComponent } from './donation-tile/donation-tile.component';

import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { LogoBonsaiComponent } from './logo-bonsai/logo-bonsai.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { MatIconModule } from '@angular/material/icon';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ServiceWorkerModule} from '@angular/service-worker';

import { environment } from '../environments/environment';
import {MatMenuModule} from '@angular/material/menu';
import { TodoCheckboxComponent } from './todo-checkbox/todo-checkbox.component';
import { LogoBonsaiLoveComponent } from './logo-bonsai-love/logo-bonsai-love.component';
import { GoalCreateComponent } from './goal-create/goal-create.component';
import { TwoPaneViewModule } from './views/two-pane-view-module/two-pane-view.module';
import { PrimaryPaneComponent } from './views/primary-pane/primary-pane.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { GoalCreationDialogComponent } from './goal-creation-dialog/goal-creation-dialog.component';
//import { DuoPaneLibraryModule } from '../../../../../angular-two-pane/duo-pane-workspace/dist/duo-pane-library';
import {DuoPaneLibraryModule} from 'duo-pane-library';

export const configFactory = (configService: ConfigService) => {
  return () => configService.loadConfig();
};


@NgModule({
  declarations: [
    AppComponent,
    GoalCreateComponent,
    GoalListComponent,
    DonationListComponent,
    DonationTileComponent,
    LogoBonsaiComponent,
    TitleBarComponent,
    TodoCheckboxComponent,
    LogoBonsaiLoveComponent,
    PrimaryPaneComponent,
    HomeScreenComponent,
    GoalCreationDialogComponent,
  ],
  imports: [
    DuoPaneLibraryModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatMenuModule,
    MatButtonModule,
    TwoPaneViewModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
