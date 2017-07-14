import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { EventsComponent } from './events/events.component';
import { BudgetBlackMetalComponent } from './budget-black-metal/budget-black-metal.component';
import { TitleDetailsComponent } from './title-details/title-details.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    EventsComponent,
    BudgetBlackMetalComponent,
    TitleDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
