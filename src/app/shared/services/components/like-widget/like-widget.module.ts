import { UniqueIdService } from './../../unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [LikeWidgetComponent],
  providers: [UniqueIdService],
})
export class LikeWidgetModule {}
