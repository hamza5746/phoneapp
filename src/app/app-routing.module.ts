import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContacteditComponent } from './contactedit/contactedit.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'contact-list',
    component:ContactlistComponent
  },
  {
    path:'contact-edit',
    component:ContacteditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
