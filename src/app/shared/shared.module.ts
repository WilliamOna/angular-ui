import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsifyPipe } from './ellipsify.pipe';

@NgModule({
  declarations: [EllipsifyPipe],
  imports: [CommonModule],
  exports: [EllipsifyPipe],
})
export class SharedModule {}
