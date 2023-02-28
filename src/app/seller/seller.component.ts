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
  showLogin = false;
  authError: string = '';

  constructor(private seller: SellerService, private router: Router) { }

  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  signUp(data: SignUp): void {
    console.log(data);
    this.seller.userSignUp(data)
  }

  login(data: SignUp): void {
    // console.log(data);
    // this.authError = "",
      this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = "email or password is invalid"
      }
    })
  }


  openLogin() {
    this.showLogin = true

  }
  opensignUp() {
    this.showLogin = false
  }

 

}

