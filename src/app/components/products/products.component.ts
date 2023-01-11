import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Icategory } from 'src/app/interface/icategory';
import { Iproduct } from 'src/app/interface/iproduct';
import { MyProductsService } from 'src/app/services/my-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {
  categoryList: Icategory[];
  totalPrice: number = 0;
  selectedCategoryID: number = 0;
  prdFilterCat: Iproduct[] = []
  selecetdProductID: number = 0;
  addButton: boolean = false
  amount: number = 0;
  orderDate: Date
  @Input() selectedCatIDchild: number = 0
  @Output() item = new EventEmitter()
  constructor(private MyProductsService: MyProductsService) {
    this.orderDate = new Date
    this.categoryList = [
      { id: 1, name: "Hot drinks" },
      { id: 2, name: "Juices" },
      { id: 3, name: "Soda" },
    ]
  }
  ngOnInit(): void {
    this.prdFilterCat = this.MyProductsService.getAllProducts()
  }
  ngOnChanges(): void {
    this.prdFilterCat = this.MyProductsService.getProductsByCat(this.selectedCatIDchild)
  }

  add(product: object) {
    this.item.emit({ item: product, quantity: this.amount })
  }


}
