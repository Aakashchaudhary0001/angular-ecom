import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(private seller: SellerService, private router:Router) {}
  
  ngOnInit():void{
    this.seller.reloadSeller()
  }
  signUp(data: SignUp): void {

    this.seller.userSignUp(data)

    };


  }

