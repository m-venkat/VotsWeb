
import { Component, ViewEncapsulation, ViewChild, ViewChildren, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SlimScroll } from 'angular-io-slimscroll';
import { MatSidenav } from '@angular/material';
import { SideNavService } from '../../services/sidenav.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
    @ViewChild('sidenav') public sidenav: MatSidenav;
    events = [];

    public constructor(private sideNavService: SideNavService) {    }
    public ngOnInit() {
        this.sideNavService.SetSideNav(this.sidenav);
    }
    shouldRun = true;
    

    ToggleNavMenu() {
       
    }

    ToggleFullScreen(event: any) {
        this.LaunchFullScreen(event.target);
    }

    private LaunchFullScreen(element:HTMLElement) {
        var document: any = window.document;
         if ((document.fullscreenElement && document.fullscreenElement !== null) ||
            (!document.mozFullScreen  && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen();
             }
        } else {
             if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }         
    }
}
