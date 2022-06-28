import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem, menuItems } from '../menuItems';

@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.component.html',
  styleUrls: ['./menu-item-details.component.css']
})
export class MenuItemDetailsComponent implements OnInit {

  item: MenuItem | undefined;

  constructor(private route: ActivatedRoute) {  // Inject ActivatedRoute in component configuration to use a service
   }

  ngOnInit() {
    // 1. Get the item id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const itemId = Number(routeParams.get('itemId'));  // define in app.module.ts
    // 2. Find the item with the provided id
    this.item = menuItems.find(item => item.id === itemId);
  }

}
