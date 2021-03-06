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
import { TitleDetailsComponent } from './title-details/title-details.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminComponent } from './admin/admin.component';
import { EditTitleComponent } from './edit-title/edit-title.component';
import { MembersComponent } from './members/members.component';
import { EditMembersComponent } from './edit-members/edit-members.component';
import { MemberInfoComponent } from './member-info/member-info.component'

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    EventsComponent,
    BudgetBlackMetalComponent,
    TitleDetailsComponent,
    AdminComponent,
    EditTitleComponent,
    MembersComponent,
    EditMembersComponent,
    MemberInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
