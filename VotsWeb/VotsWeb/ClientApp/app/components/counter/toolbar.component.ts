import { Component, OnInit } from '@angular/core';
import {SideNavService } from '../../services/sidenav.service';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolBarComponent implements OnInit {
    
    public constructor(public sideNavService: SideNavService) {       
    }
    
    public ngOnInit() {
    }

   
}
