import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service/data.service';
import { VotsMenu, VotsMenuItem, MenuItems, VotsMenuParent } from '../../models/MenuModels';
import { Observable } from 'rxjs';
import { List } from 'linqts';
import { MatInputModule } from '@angular/material/input';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader,MatInput } from '@angular/material';
import { from, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-vots-sidemenu',
  templateUrl: './vots-sidemenu.component.html',
  styleUrls: ['./vots-sidemenu.component.css']
})
export class VotsSidemenuComponent implements OnInit {

  //menu: Observable<VotsMenuItem[]>;
 
  parentMenu : VotsMenuParent[] = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.GetVotsSideMenu();
  }

  SideMenuSelected(selectedMenu: VotsMenuItem): void {
    alert("Selected.."+JSON.stringify(selectedMenu));
  }

  GetVotsSideMenu(): Observable<VotsMenuParent[]> {
    return this.dataService.GetVotsMenu()
      .pipe
      (
      map
        (
        item => {
          let parentMenus = item.map(item => ({ parentMenuId: item.ParentMenuId, parentMenuLabel: item.ParentMenuLabel }))
            .filter((thing, index, self) =>
              index === self.findIndex((t) => (
                t.parentMenuId === thing.parentMenuId && t.parentMenuLabel === thing.parentMenuLabel
              ))
            );
          parentMenus.forEach(mnu => {
            let parentWithChild = item.filter(item => item.ParentMenuId == mnu.parentMenuId)
              .filter((thing, index, self) =>
                index === self.findIndex((t) => (
                  t.ChildMenuId === thing.ChildMenuId && t.ParentMenuId === thing.ParentMenuId
                ))
              )
            let pm = <VotsMenuParent>{};
            pm.ParentMenuId = mnu.parentMenuId;
            pm.ParentMenuLabel = mnu.parentMenuLabel;
            pm.MenuItems = parentWithChild;
            this.parentMenu.push(pm);
            
          }//end of item processing
            return this.parentMenu;
        }
           
      )// End of map
        
  }
  
  /*
  GetVotsSideMenu(): void {
    this.dataService.GetVotsMenu().subscribe(data => {
      let menu: VotsMenuItem[];
      menu = data;
      let parentMenus = menu.map(item => ({ parentMenuId: item.ParentMenuId, parentMenuLabel: item.ParentMenuLabel }))
        .filter((thing, index, self) =>
          index === self.findIndex((t) => (
            t.parentMenuId === thing.parentMenuId && t.parentMenuLabel === thing.parentMenuLabel
          ))
        );       

       parentMenus.forEach(mnu => {
        let parentWithChild = menu.filter(item => item.ParentMenuId == mnu.parentMenuId)
          .filter((thing, index, self) =>
            index === self.findIndex((t) => (
              t.ChildMenuId === thing.ChildMenuId && t.ParentMenuId === thing.ParentMenuId
            ))
          )
        let pm = <VotsMenuParent>{};
        pm.ParentMenuId = mnu.parentMenuId;
        pm.ParentMenuLabel = mnu.parentMenuLabel;
        pm.MenuItems = parentWithChild;
        this.parentMenu.push(pm);
      });

      console.log(this.parentMenu);
      
       },
       error => { }
     );
  }*/
}
