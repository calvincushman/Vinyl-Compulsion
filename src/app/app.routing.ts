import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { BudgetBlackMetalComponent } from './budget-black-metal/budget-black-metal.component';
import { TitleDetailsComponent } from './title-details/title-details.component';
import { MemberInfoComponent } from './member-info/member-info.component'
import { AdminComponent } from './admin/admin.component';
import { MembersComponent } from './members/members.component';

const appRoutes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'budget-black-metal',
    component: BudgetBlackMetalComponent
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'titles/:id',
    component: TitleDetailsComponent
  },
  {
    path: 'members/:id',
    component: MemberInfoComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
