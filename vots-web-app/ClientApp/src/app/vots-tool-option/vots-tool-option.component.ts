import { Component, OnInit } from '@angular/core';
import { MatCheckbox} from '@angular/material';
import { SideNavService } from '../navigation-service/navigation.service';

@Component({
  selector: 'app-vots-tool-option',
  templateUrl: './vots-tool-option.component.html',
  styleUrls: ['./vots-tool-option.component.css']
})
export class VotsToolOptionComponent implements OnInit {

  constructor(private sideNavService: SideNavService) { }

  ngOnInit() {
  }

}
