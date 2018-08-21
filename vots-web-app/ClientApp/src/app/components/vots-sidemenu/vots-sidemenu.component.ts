import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service/data.service';
import { VotsMenu, VotsMenuItem } from '../../models/MenuModels';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vots-sidemenu',
  templateUrl: './vots-sidemenu.component.html',
  styleUrls: ['./vots-sidemenu.component.css']
})
export class VotsSidemenuComponent implements OnInit {

  menu: VotsMenuItem[];


  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.GetVotsSideMenu();
  }

  GetVotsSideMenu(): void {
      this.dataService.GetVotsMenu().subscribe(data => {
        this.menu = data;
      },
      error => { }
    );
  }
}
