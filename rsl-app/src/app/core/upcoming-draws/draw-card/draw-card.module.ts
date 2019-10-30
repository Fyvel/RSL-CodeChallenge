import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawCardComponent } from './draw-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DrawCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [DrawCardComponent]
})
export class DrawCardModule { }
