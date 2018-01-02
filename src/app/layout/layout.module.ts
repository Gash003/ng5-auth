import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  imports: [
    SharedModule
  ],
  exports: [ NavbarComponent, SidenavComponent],
  declarations: [NavbarComponent, SidenavComponent]
})
export class LayoutModule { }
