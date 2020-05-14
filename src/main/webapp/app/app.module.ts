import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { BugTrackerSharedModule } from 'app/shared/shared.module';
import { BugTrackerCoreModule } from 'app/core/core.module';
import { BugTrackerAppRoutingModule } from './app-routing.module';
import { BugTrackerHomeModule } from './home/home.module';
import { BugTrackerEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { MyticketsComponent } from './mytickets/mytickets.component';

@NgModule({
  imports: [
    BrowserModule,
    BugTrackerSharedModule,
    BugTrackerCoreModule,
    BugTrackerHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    BugTrackerEntityModule,
    BugTrackerAppRoutingModule
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    ErrorComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    FooterComponent,
    MyticketsComponent
  ],
  bootstrap: [MainComponent]
})
export class BugTrackerAppModule {}
