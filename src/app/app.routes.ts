import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


export const routes: Routes = [

  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full',
  },
  {
    path: 'contacts',
    loadComponent: () => import('./contacts/contacts.page').then( m => m.ContactsPage)
  },
  
  {
    path: 'contact-detail/:id',
    loadComponent: () => import('./contact-detail/contact-detail.page').then( m => m.ContactDetailPage)
  },
  {
    path: 'add-contact',
    loadComponent: () => import('./add-contact/add-contact.page').then( m => m.AddContactPage)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }