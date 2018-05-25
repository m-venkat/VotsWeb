import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SideNavService } from '../navigation-service/navigation.service';
import { ToolBarOptions } from '../models/dtos';

@Component({
    selector: 'vots-toolbar',
    templateUrl: './vots-toolbar.component.html',
    styleUrls: ['./vots-toolbar.component.css']
})
export class VotsToolBarComponent implements OnInit
{

  @ViewChild('saveButton') private btnSave: HTMLButtonElement ;
  @ViewChild('deleteButton') private btnDelete: HTMLButtonElement;
  @ViewChild('executeButton') public btnExecute: HTMLButtonElement;
  @ViewChild('retrieveButton') public btnRetrieve: HTMLButtonElement;
  @ViewChild('newButton') public btnNew: HTMLButtonElement;

  @Input("ToolBarOptions") ToolBarOptions: ToolBarOptions;

    public constructor(public sideNavService: SideNavService) {       
    }
    
  public ngOnInit() {
    this.btnSave.disabled = this.ToolBarOptions.CanSave;
    this.btnDelete.disabled = this.ToolBarOptions.CanDelete;
    this.btnExecute.disabled = this.ToolBarOptions.CanExecute;
    this.btnRetrieve.disabled = this.ToolBarOptions.CanRetreive;
    this.btnNew.disabled = this.ToolBarOptions.CanNew;
 }

   
}
