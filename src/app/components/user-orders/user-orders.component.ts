import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit, OnChanges {
  cartProducts: any[] = []
  fullOrder: any
  constructor() {
  }

  ngOnInit(): void {
    this.getOrderData()
  }

  ngOnChanges(): void {
    this.cancelOrder()
  }

  getOrderData() {
    this.fullOrder = JSON.parse(localStorage.getItem("FullOrder")!)
    console.log(this.fullOrder)
  }

  cancelOrder() {
    this.fullOrder = []
    localStorage.setItem("FullOrder", JSON.stringify(this.fullOrder))

  }

}
