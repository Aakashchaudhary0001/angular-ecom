import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularProducts:undefined | product[]
  trendyProducts:undefined | product[]


  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.product.popularProducts().subscribe((data)=>{
      console.log(data);
      
      this.popularProducts=data;


    });
    this.product.trendingProducts().subscribe((data)=>{
      console.log(data);
      this.trendyProducts=data;
      

    })
    
}
}