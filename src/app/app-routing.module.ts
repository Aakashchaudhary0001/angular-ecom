import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';


const routes: Routes = [
  // App Routes goes here
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: 'Seller',
    component: SellerComponent,

  },
  
  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
