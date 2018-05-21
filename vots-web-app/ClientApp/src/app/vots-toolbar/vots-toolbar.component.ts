import { Component, OnInit, ViewChild } from '@angular/core';
import { SideNavService } from '../navigation-service/navigation.service';

@Component({
    selector: 'vots-toolbar',
    templateUrl: './vots-toolbar.component.html',
    styleUrls: ['./vots-toolbar.component.css']
})
export class VotsToolBarComponent implements OnInit {
    @ViewChild('saveButton') private btnSave: HTMLButtonElement ;
    @ViewChild('deleteButton') private btnDelete: HTMLButtonElement;
    @ViewChild('executeButton') public btnExecute: HTMLButtonElement;
    @ViewChild('retrieveButton') public btnRetrieve: HTMLButtonElement;
    @ViewChild('newButton') public btnNew: HTMLButtonElement;

    private _canDelete: boolean ;
    private _canSave: boolean;
    private _canNew: boolean;

    public get CanDelete(): boolean {
        return this._canDelete;
    }

    public set CanDelete(value: boolean){
        this._canDelete = value;
        this.btnSave.disabled = !value
    }

    public get CanSave(): boolean {
        return this._canSave;
    }

    public set CanSave(value: boolean) {
        this._canSave = value;
        this.btnSave.disabled = !value
    }


    public get CanNew(): boolean {
        return this._canNew;
    }

    public set CanNew(value: boolean) {
        this._canNew = value;
        this.btnNew.disabled = !value;
    }

    public constructor(public sideNavService: SideNavService) {       
    }
    
    public ngOnInit() {
    }

   
}
