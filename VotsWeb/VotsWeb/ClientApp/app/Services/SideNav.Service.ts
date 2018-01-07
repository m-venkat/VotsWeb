import { Injectable } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material';

@Injectable()
export class SideNavService {
    private sideNav: MatSidenav;

    public SetSideNav(sideNav: MatSidenav) {
        this.sideNav = sideNav;
    }

    public Open(): Promise<void> {
        return this.sideNav.open();
    }

    public Close(): Promise<void> {
        return this.sideNav.close();
    }

    public Toggle(): Promise<void> {
        return this.sideNav.toggle();
    }
}