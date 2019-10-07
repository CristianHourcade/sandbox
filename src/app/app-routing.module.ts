import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { HomeExampleComponent } from './component/home-example/home-example.component';


const routes: Routes = [
  {path: '', component: SidenavComponent, children: [
    {
      path: 'xs', component: HomeExampleComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
