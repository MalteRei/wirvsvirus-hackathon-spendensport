import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { GoalComponent } from './goal/goal.component';

import {FormsModule} from '@angular/forms';
import { GoalListComponent } from './goal-list/goal-list.component';
import {Router} from '@angular/router';
import { DonationListComponent } from './donation-list/donation-list.component';
import { DonationTileComponent } from './donation-tile/donation-tile.component';

import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@Angular/material/input';
import { LogoBonsaiComponent } from './logo-bonsai/logo-bonsai.component';
import { TitleBarComponent } from './title-bar/title-bar.component';

export const configFactory = (configService: ConfigService) => {
  return () => configService.loadConfig();
};


@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalListComponent,
    DonationListComponent,
    DonationTileComponent,
    LogoBonsaiComponent,
    TitleBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule
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
