import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from "../menuItems"

@Component({
  selector: 'app-menu-item-alerts',
  templateUrl: './menu-item-alerts.component.html',
  styleUrls: ['./menu-item-alerts.component.css']
})
export class MenuItemAlertsComponent{

  @Input() item: MenuItem | undefined;
  @Output() notify = new EventEmitter();
}
