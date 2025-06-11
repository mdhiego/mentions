import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentionTabsComponent } from './mention-tabs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MentionTabsComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  exports: [MentionTabsComponent]
})
export class MentionTabsModule {}