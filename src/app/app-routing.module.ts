import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductListComponent } from './product-list/product-list.component'
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  // {path: 'home', component: AppComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'contacts', component: ContactsComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
