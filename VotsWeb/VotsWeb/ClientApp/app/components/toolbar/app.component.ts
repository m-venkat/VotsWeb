import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SlimScroll } from 'angular-io-slimscroll';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {
    events = [];

    shouldRun = true;

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

        //if ((document.fullscreenElement && document.fullscreenElement !== null) ||
        //    (!document.mozFullScreen  && !document.webkitIsFullScreen)) {
        //    if (document.documentElement.requestFullscreen) {
        //        document.documentElement.requestFullscreen();
        //    } else if (document.documentElement.mozRequestFullScreen) {
        //        document.documentElement.mozRequestFullScreen();
        //    } else if (document.documentElement.webkitRequestFullScreen) {
        //        document.documentElement.webkitRequestFullScreen();
        //    }
        //} else {
        //    if (document.cancelFullScreen) {
        //        document.cancelFullScreen();
        //    } else if (document.mozCancelFullScreen) {
        //        document.mozCancelFullScreen();
        //    } else if (document.webkitCancelFullScreen) {
        //        document.webkitCancelFullScreen();
        //    }
        //}  
    }
}
