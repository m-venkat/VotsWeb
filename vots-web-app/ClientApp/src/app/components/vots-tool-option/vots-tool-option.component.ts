import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatCheckbox, MatButton } from '@angular/material';
import { VotsToolOptionBaseComponent } from '../vots-tool-option-base/vots-tool-option-base.component';

@Component({
  selector: 'app-vots-tool-option',
  templateUrl: './vots-tool-option.component.html',
  styleUrls: ['./vots-tool-option.component.css']
})
export class VotsToolOptionComponent extends VotsToolOptionBaseComponent implements OnInit {

  @Input('ButtonCaption') ButtonCaption: string;

  ngOnInit() {
    console.log('Caption of Button :' + this.ButtonCaption);
  }

}
