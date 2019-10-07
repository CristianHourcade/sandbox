import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardOpenComponent } from './component/card-open/card-open.component';
import { InfoCardComponent } from './component/info-card/info-card.component';
import { CardItemListComponent } from './component/card-item-list/card-item-list.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { HomeExampleComponent } from './component/home-example/home-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CardOpenComponent,
    InfoCardComponent,
    CardItemListComponent,
    SidenavComponent,
    HomeExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
