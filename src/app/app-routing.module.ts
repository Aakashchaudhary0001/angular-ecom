import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerComponent } from './seller/seller.component';


const routes: Routes = [
  // App Routes goes here
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Seller',
    component: SellerComponent,

  },
  {
    path: 'seller-home',
    component: SellerHomeComponent, 
    canActivate:[AuthGuard]
 
  },
  
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
