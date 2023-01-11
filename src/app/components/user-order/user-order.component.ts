import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/interface/icategory';
import { Iproduct } from 'src/app/interface/iproduct';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {
  categoryList: Icategory[];
  ParentSelectedCategoryID: number = 0;
  prdFilterCat: Iproduct[] = []
  cartProducts: any[] = []
  constructor() {

    this.categoryList = [
      { id: 1, name: "Hot drinks" },
      { id: 2, name: "Juices" },
      { id: 3, name: "Soda" },
    ]


  }

  ngOnInit(): void {

  }
  addToCart(event: any) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if (exist) {
        alert("Product is already in your cart")
      } else {
        this.cartProducts.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
        console.log(this.cartProducts)
      }
    } else {

      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))

    }




  }
}
