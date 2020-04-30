import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAccountComponent } from './add-account/add-account.component';
import { ShowAccountComponent } from './show-account/show-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';



const routes: Routes = [
  { path: 'AddAccount',component: AddAccountComponent},
  { path: 'ShowAccountDetails', component: ShowAccountComponent },
   {path:'UpdateAccount',component:UpdateAccountComponent},
   {path:'DeleteAccount',component:DeleteAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
