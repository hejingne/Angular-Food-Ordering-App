import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuItemListComponent } from './menu-item-list/menu-item-list.component';
import { MenuItemAlertsComponent } from './menu-item-alerts/menu-item-alerts.component';
import { MenuItemDetailsComponent } from './menu-item-details/menu-item-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: MenuItemListComponent },
      { path: 'items/:itemId', component: MenuItemDetailsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    MenuItemListComponent,
    MenuItemAlertsComponent,
    MenuItemDetailsComponent,
    ShoppingCartComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
