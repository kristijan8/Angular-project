import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovielistComponent } from './movielist.component';

@NgModule({
  declarations: [MovielistComponent],
  imports: [CommonModule],
  exports: [MovielistComponent],
})
export class MovielistModule {}
