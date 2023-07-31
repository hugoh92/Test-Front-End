import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit {
 
  activeTab: string = 'tab1';

  openTab(tabId: string) {
    this.activeTab = tabId;
  }

  constructor() { }
  ngOnInit(): void {
  }

}
