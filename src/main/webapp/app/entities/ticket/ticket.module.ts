import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BugTrackerSharedModule } from 'app/shared/shared.module';
import { TicketComponent } from './ticket.component';
import { TicketDetailComponent } from './ticket-detail.component';
import { TicketUpdateComponent } from './ticket-update.component';
import { TicketDeleteDialogComponent } from './ticket-delete-dialog.component';
import { ticketRoute } from './ticket.route';

@NgModule({
  imports: [BugTrackerSharedModule, RouterModule.forChild(ticketRoute)],
  declarations: [TicketComponent, TicketDetailComponent, TicketUpdateComponent, TicketDeleteDialogComponent],
  entryComponents: [TicketDeleteDialogComponent]
})
export class BugTrackerTicketModule {}
