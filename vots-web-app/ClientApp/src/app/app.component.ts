/// <reference path="vots-toolbar/vots-toolbar.component.ts" />
/// <reference path="vots-toolbar/vots-toolbar.component.ts" />
import { Component, ViewEncapsulation, ViewChild, ViewChildren, OnInit, AfterViewInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { SlimScroll } from 'angular-io-slimscroll';
import { MatSidenav, MatButton, MatCheckbox, MatSidenavContainer } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavService } from './navigation-service/navigation.service';
import { VotsToolBarComponent } from './vots-toolbar/vots-toolbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  @ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild('sidenavtogglebutton') public sidenavtogglebutton: ElementRef;
  @ViewChild('matcheckbox') public cbox: MatCheckbox;
  private events: string[] = [""];

  public constructor(private cd: ChangeDetectorRef
    , private sideNavService: SideNavService
  ) {
    console.log("inside constructor...");
  }
  public ngOnInit() {
    console.log("inside ngOnInit...");
    this.sideNavService.SetSideNav(this.sidenav);
  }
  shouldRun = true;

  toggleChange(event: any) {
    console.log("inside toggleChange...");
    this.sideNavService.Toggle();
  }

  ngAfterViewInit() {
    console.log("inside ngAfterViewInit...");
    this.cd.detectChanges();        //To avoid the change detection errors
  }

  ToggleNavMenu():void {
    console.log("ToggleNavMenu Called");
  }

  ToggleFullScreen(event: any) {

    this.LaunchFullScreen(event.target);
  }

  log(key: any, value: any) :void{
    console.log(key, value);
  }

  private LaunchFullScreen(element: HTMLElement) {
    var document: any = window.document;
    if ((document.fullscreenElement && document.fullscreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
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
