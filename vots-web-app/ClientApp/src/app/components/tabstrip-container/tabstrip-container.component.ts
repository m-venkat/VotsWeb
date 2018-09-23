import { Component, OnInit } from '@angular/core';
import { OrchestrationService } from '../../services/orchestration-service/orchestration.service';
import { VotsMenuItem } from '../../models/MenuModels';
import $ from 'jquery';

@Component({
  selector: 'app-tabstrip-container',
  templateUrl: './tabstrip-container.component.html',
  styleUrls: ['./tabstrip-container.component.css']
})
export class TabstripContainerComponent implements OnInit {
  public SelectedMenusAsTab: VotsMenuItem[] = [];//All the active tabs (menu selected is rendered as tab)
   width:number;
  constructor(public orchestrationService: OrchestrationService) {
    this.orchestrationService.MenuSelected.subscribe(data => {     
      this.SelectedMenusAsTab.push(data);
      this.AutoAdjustTabWidth();
    });
  }


  AutoAdjustTabWidth(): void {
    let totalWidthOfTabStripContainerDiv: number = $("#tabParentContainer").width();
    let totalLiWidth = 200;//Reserve 300px for the last added Item
     $.map($('#tabs a'), function (val) {
      totalLiWidth += $(val).width();          
    });
    console.log("val.width :" + totalLiWidth);  
    console.log("Width of div is :" + $("#tabParentContainer").width());
    if (totalLiWidth + 50 >= totalWidthOfTabStripContainerDiv) {
      console.log("Li width Exceeds Tab Container width");
      $.map($('#tabs a'), function (val) {
        console.log("Hyper link text :" + $(val).text());
        console.log("Substring Part :" + $(val).text().substring(0, 5)+"...");
        $(val).text($(val).text().substring(0,5)+"...")
        //Reducing each Li width by 25%;
        //$(val).width(($(val).width()/100) * 75);
      });
    }
  }
  
  ngOnInit() {
    
  }
 
}
