import { Component, OnInit,Input,AfterViewInit,OnChanges, SimpleChanges } from '@angular/core';
import { SideNavService } from '../navigation-service/navigation.service';
import { ToolBarOptions } from '../models/dtos';

@Component({
  selector: 'app-vots-tool-option-base',
  templateUrl: './vots-tool-option-base.component.html',
  styleUrls: ['./vots-tool-option-base.component.css']
})
export class VotsToolOptionBaseComponent implements OnInit {

  @Input("CurrentToolBar") public CurrentToolBar: ToolBarOptions;
  @Input("Visible") public Visible: boolean = true;
  constructor(private sideNavService: SideNavService) { }


  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges fired");
    if (changes['Visible'])
    {
      console.log("changes['Visible'] :" + changes['Visible']);
      console.log("ngOnChanges fired for Visible Property : " +this.Visible);
      if (this.Visible.toString() == "true")//If Content becomes Visible
      {
        console.log("Visibility turns on");
        this.SetCurrentToolBar();
      }
    }
  }

  ngAfterViewInit() {
    console.log("Visibility Status :" + this.Visible);
  }


  public SetCurrentToolBar(): void {

    this.sideNavService.SetToolBar(this.CurrentToolBar);
    console.log(this.CurrentToolBar);
  }

}
