
import { Component, ViewEncapsulation, ViewChild, ViewChildren, OnInit, AfterViewInit , ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SlimScroll } from 'angular-io-slimscroll';
import { MatSidenav,MatButton,MatCheckbox } from '@angular/material';
import { SideNavService } from '../../services/sidenav.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit, AfterViewInit  {
    @ViewChild('sidenav') public sidenav: MatSidenav;
    @ViewChild('sidenavtogglebutton') public sidenavtogglebutton: ElementRef;
    @ViewChild('matcheckbox') public cbox: MatCheckbox;
    //private events = [""];
    private events : string[] = [""];

    public constructor(private cd:ChangeDetectorRef, private sideNavService: SideNavService) {    }
    public ngOnInit() {
        this.sideNavService.SetSideNav(this.sidenav);
    }
    shouldRun = true;

   

    ngAfterViewInit() {
        this.cd.detectChanges();        //To avoid the change detection errors
    }

    toggleChange(event: any) {
        this.sideNavService.Toggle();         
    }

    log(key: any, value: any) {
        console.log(key, value);
    }

    //navOpenComplete() {
    //   // alert("events Open Complete object " + this.events);
    //    console.log("this.events", this.events);
    //    this.events.push('Opened Here');
    //}

    //navCloseComplete() {
    //    alert("events Close COmplete object " + this.events);
    //    console.log("this.events", this.events);
    //    this.events.push("Closed");
    //}
    ToggleNavMenu() {
     //   alert(this.cbox.disabled);
      // // this.cbox.disabled = true;
      //  this.sidenavtogglebutton.nativeElement.innerHTML = "Changed..";
      //  this.sidenavtogglebutton.nativeElement.disabled = true;        
      // // alert("before change");
      //  this.sideNavService.Toggle();
      // // alert("after change");
      //  this.sidenavtogglebutton.nativeElement.innerHTML = "Ready now";
      ////  alert("after change1");
      //  this.sidenavtogglebutton.nativeElement.disabled = false; 
    //    this.cbox.disabled = false;
        //this.sidenavtogglebutton.disabled = false;
        //alert("after Toggle");
        //this.events.push("after Toggle");
       
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
