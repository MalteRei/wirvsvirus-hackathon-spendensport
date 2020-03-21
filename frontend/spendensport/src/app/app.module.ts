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

export const configFactory = (configService: ConfigService) => {
  return () => configService.loadConfig();
};


@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
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
