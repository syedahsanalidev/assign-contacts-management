import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactsComponent} from './components/contacts/contacts.component'
import {ContactDetailsComponent} from "./components/contacts/contact-details/contact-details.component";

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent,
    children: [{ path: 'contacts/:id', component: ContactDetailsComponent },],
  },
  {
    path: 'contacts/:id/email_addresses',
    component: ContactDetailsComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
