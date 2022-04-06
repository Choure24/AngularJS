import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletesComponent } from './deletes/deletes.component';
import { DisplayComponent } from './display/display.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'display' , component:DisplayComponent},
  {path:'menu' , component:MenuComponent},
  {path:'search' , component:SearchComponent},
  {path:'deletes' , component:DeletesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
