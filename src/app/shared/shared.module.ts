import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class SharedModule { }
