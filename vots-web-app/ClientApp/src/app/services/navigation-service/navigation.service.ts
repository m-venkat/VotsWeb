import { Injectable } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material';
import { Observable } from 'rxjs';
import { ToolBarOptions} from '../../models/dtos';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  private sideNav: MatSidenav;
  public ToolBarOptions: ToolBarOptions;

  constructor() {
    this.ToolBarOptions = new ToolBarOptions();
    this.ToolBarOptions.CanNew = true;
    this.ToolBarOptions.CanDelete = true;
  }

  public SetToolBar(tbo: ToolBarOptions) {
    this.ToolBarOptions = tbo;
  }

  public SetSideNav(sideNav: MatSidenav) {
    this.sideNav = sideNav;
  }

  public Open(): Promise<MatDrawerToggleResult> {
    return this.sideNav.open();
  }

  public Close(): Promise<MatDrawerToggleResult> {
    return this.sideNav.close();
  }

  public Toggle(): Promise<MatDrawerToggleResult> {
   // console.log("Opened :" + this.sideNav.opened);
    return this.sideNav.toggle();
  }
}
