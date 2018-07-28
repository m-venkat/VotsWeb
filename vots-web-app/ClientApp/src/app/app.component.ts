import {
  Component,
  ViewEncapsulation,
  ViewChild,
  ViewChildren,
  OnInit,  
  AfterViewInit,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
//import '../assets/scripts/votssplitpane.js'
//import * as VotsSplitPane from '../assets/scripts/votssplitpane.js';
import  '../assets/scripts/votssplitpane.js';
import { SlimScroll } from 'angular-io-slimscroll';
import { MatSidenav, MatButton, MatCheckbox, MatSidenavContainer } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavService } from './navigation-service/navigation.service';
import { VotsToolBarComponent } from './vots-toolbar/vots-toolbar.component';
import { VotsToolOptionComponent } from './vots-tool-option/vots-tool-option.component';
import { ToolBarOptions } from './models/dtos';

declare var VotsSplitPane: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  VotsSplitPane: any;
  @ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild('sidenavtogglebutton') public sidenavtogglebutton: ElementRef;
  @ViewChild('matcheckbox') public cbox: MatCheckbox;
  @ViewChild('searchBarPanelOpener') public searchBarPanelOpener: MatCheckbox;  
  private events: string[] = [""];
  @ViewChild('saveanddelete') saveanddelete: VotsToolOptionComponent;
  @ViewChild('newandexecute') newandexecute: VotsToolOptionComponent;
  saveanddeletecaption :string = "Save and Delete";
  newandexecutecaption :string = "New and Execute";
  public saveanddeleteTBO: ToolBarOptions = new ToolBarOptions();
  public newandexecuteTBO: ToolBarOptions = new ToolBarOptions();
  VotsToolOptionComponent
  public constructor(private cd: ChangeDetectorRef,
    private sideNavService: SideNavService)
  {

    this.saveanddeleteTBO.CanSave = true;
    this.saveanddeleteTBO.CanDelete = true;
    this.newandexecuteTBO.CanNew = true;
    this.newandexecuteTBO.CanExecute = true;
      

    console.log("inside constructor...");
  }

  public ngOnInit() {
    console.log("inside ngOnInit...");
    this.sideNavService.SetSideNav(this.sidenav);
    VotsSplitPane.init();
    //VotsSplitPane.PrintCurrentDate();
    console.log("Current Time is :"+VotsSplitPane.CurrentTime);
  }
  shouldRun = true;

  toggleChange(event: any) {
    console.log("inside toggleChange...");
    this.sideNavService.Toggle();
  }

  ngAfterViewInit() {
    console.log("inside ngAfterViewInit...");
    this.saveanddelete.SetCurrentToolBar();
    this.newandexecute.SetCurrentToolBar();
   // VotsSplitPane.init();
    this.cd.detectChanges();        //To avoid the change detection errors
  }

  ToggleNavMenu():void {
    console.log("ToggleNavMenu Called");
  }

  ToggleFullScreen(event: any) {
    this.LaunchFullScreen();
  }

  log(key: any, value: any) :void{
    console.log(key, value);
  }

  private LaunchFullScreen() {
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
