import { Component } from '@angular/core';
import { menuItems } from '../menuItems';

@Component({
  selector: 'app-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.css']
})
export class MenuItemListComponent{
  menuItems = menuItems;

  share() {
    window.alert("This item has been shared!");
  }
}
