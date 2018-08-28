import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service/data.service';
import { VotsMenu, VotsMenuItem, MenuItems, VotsMenuParent } from '../../models/MenuModels';
import { Observable,from, interval } from 'rxjs';
import 'rxjs/add/observable/of';
import { List } from 'linqts';
import { MatInputModule } from '@angular/material/input';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader,MatInput, MatAutocomplete } from '@angular/material';
import { map, debounceTime, filter, concatMap, scan, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-vots-sidemenu',
  templateUrl: './vots-sidemenu.component.html',
  styleUrls: ['./vots-sidemenu.component.css']
})
export class VotsSidemenuComponent implements OnInit {

  flatMenu: VotsMenuItem[];
  currentlyFilteredMenu: string = "";
  parentMenu : Observable<VotsMenuParent[]>;

  constructor(public dataService: DataService) { }
  /*
    Many new learning
    Observable.of vs for   (for emulates as individual Item), or projects as a single array
    filter will work on each item
    concatMap (accumulates all the individual items into one collection)
    scan (prepares a single collection and returns,  scan method should be defined with datatypes)
  */
  filterAutoComplete(): void {
    console.log(this.currentlyFilteredMenu);
    let flm = from(this.flatMenu)
      .pipe(
      filter(menu =>
            (
                menu.ChildMenuLabel.toLowerCase().startsWith(this.currentlyFilteredMenu.toLowerCase()) 
                //|| menu.ParentMenuLabel.toLowerCase().indexOf(this.currentlyFilteredMenu.toLowerCase()) > 0
            )
      ),     
      concatMap(value => Observable.of(value)),
      scan((acc: VotsMenuItem[], value: VotsMenuItem) => {
        acc.push(value); return acc;
      }, []),
      debounceTime(500)
    );
    console.log('flm is ', flm);
    //flm.subscribe(sub => { console.log('Filtered :',sub) });
    this.parentMenu = this.GetVotsSideMenu(this.currentlyFilteredMenu == "" ? Observable.of(this.flatMenu) : flm);
    //if (this.currentlyFilteredMenu == "") {
     
    //}
    //else {
    //}

    //this.GetVotsSideMenu(flm).subscribe(menuTree => {  
    //  console.log('menuTree', menuTree);
    //  if(menuTree != undefined && menuTree.length > 0)
    //    this.parentMenu = menuTree;

    //});

  }

  ngOnInit() {
    this.dataService.GetVotsMenu().subscribe(_flatMenu => {
      this.flatMenu = _flatMenu;
      this.parentMenu = this.GetVotsSideMenu(Observable.of(this.flatMenu));
      //this.GetVotsSideMenu(Observable.of(this.flatMenu)).subscribe(menuTree => {
      //  this.parentMenu = menuTree;
      //});
    });
  }

  SideMenuSelected(selectedMenu: VotsMenuItem): void {
    alert("Selected.."+JSON.stringify(selectedMenu));
  }

  //Returning as Observable
  GetVotsSideMenu(flatMenu: Observable<VotsMenuItem[]>):  Observable<VotsMenuParent[]>
  {
   // return this.dataService.GetVotsMenu()
    return flatMenu.pipe
      (
      map
        (
        item => {
          let parentMenus = item.map(item => ({ parentMenuId: item.ParentMenuId, parentMenuLabel: item.ParentMenuLabel }))//Parent Menu ID and Parent Menu Label only
            .filter((thing, index, self) => // Filter for duplicates and get Distinct Parent Menu Items
              index === self.findIndex((t) => (
                t.parentMenuId === thing.parentMenuId && t.parentMenuLabel === thing.parentMenuLabel
              ))
          );
          let pmm: VotsMenuParent[] = [] ;
          parentMenus.forEach(mnu => { 
            let parentWithChild = item.filter(item => item.ParentMenuId == mnu.parentMenuId)  //Get All the Children for current Parent      
            let pm = <VotsMenuParent>{};  //Compose Hierarchical Object
            pm.ParentMenuId = mnu.parentMenuId;
            pm.ParentMenuLabel = mnu.parentMenuLabel;
            pm.MenuItems = parentWithChild;
            pmm.push(pm);
          }//end of item processing
          );
          return pmm;
        }
        )// End of map
      )//end of Pipe
      //.subscribe(data => {
      //  console.log(data);
      //});
  }
  
  /*
  // Returning it as Just Array and not as Observable
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
