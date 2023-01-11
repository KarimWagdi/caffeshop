import { Injectable } from '@angular/core';
import { Icategory } from '../interface/icategory';
import { Iproduct } from '../interface/iproduct';

@Injectable({
  providedIn: 'root'
})
export class MyProductsService {
   productsList: Iproduct[];
  constructor() {
    this.productsList = [
      { id: 0, name: "Tea", price: 5, imgURL: "https://images.ctfassets.net/e8bhhtr91vp3/4v9X0NPdU6zsq1UwHXfYpV/8dada58fad5e54841c1e51e21fd50566/worldtea_abouttea_organic_img1_1460x593-1437575-jpg.jpg?w=800&q=80", categoryID: 1, available: true },
      { id: 1, name: "Green tea", price: 7, imgURL: "https://www.archanaskitchen.com/images/archanaskitchen/beverages/Green_tea_recipe.jpg", categoryID: 1, available: true },
      { id: 2, name: "Espresso", price: 10, imgURL: "https://www.nescafe.com/mena/sites/default/files/2022-03/espresso-azera-range-range-content-teaser-desktop.jpg", categoryID: 1, available: true },
      { id: 3, name: "Caffe Latte", price: 10, imgURL: "https://cdn7.kiwilimon.com/recetaimagen/36986/46349.jpg", categoryID: 1, available: true },
      { id: 4, name: "Cappucino", price: 15, imgURL: "https://assets.afcdn.com/recipe/20160919/20976_w1024h1024c1cx2624cy1749.jpg", categoryID: 1, available: true },
      { id: 5, name: "Trukish coffe", price: 10, imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkt6vX5IujZlcluPsInfAJP2EXfM5jyOe6Tg&usqp=CAU", categoryID: 1, available: true },
      { id: 6, name: "Orange", price: 20, imgURL: "https://www.alphafoodie.com/wp-content/uploads/2020/11/Orange-Ginger-Juice-1-of-1.jpeg", categoryID: 2, available: true },
      { id: 7, name: "Mango", price: 20, imgURL: "https://masalaandchai.com/wp-content/uploads/2021/06/Mango-Juice-Featured.jpg", categoryID: 2, available: true },
      { id: 8, name: "Watermelon", price: 20, imgURL: "https://bellyfull.net/wp-content/uploads/2022/06/Watermelon-Juice-blog-4.jpg", categoryID: 2, available: true },
      { id: 9, name: "Apple", price: 20, imgURL: "https://www.archanaskitchen.com/images/archanaskitchen/World_Beverages/Mulled_Apple_Juice_Recipe-1.jpg", categoryID: 2, available: true },
      { id: 10, name: "Banana", price: 20, imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2cfheE0C3Hm0zn5EXMq3YKj3f8zbPWPvNXw&usqp=CAU", categoryID: 2, available: true },
      { id: 11, name: "Grape", price: 25, imgURL: "https://cdn2.foodviva.com/static-content/food-images/juice-recipes/grape-juice/grape-juice.jpg", categoryID: 2, available: true },
      { id: 12, name: "Oreo", price: 25, imgURL: "https://saltandbaker.com/wp-content/uploads/2020/12/New-Oreo-Milkshake-3.jpg", categoryID: 2, available: true },
      { id: 13, name: "Pepsi", price: 10, imgURL: "https://media.takealot.com/covers_images/aaeb0c0a49f2413a8669d30d97c74593/s-pdpxl.file", categoryID: 3, available: true },
      { id: 14, name: "Coca Cola", price: 10, imgURL: "https://cdnprod.mafretailproxy.com/sys-master-root/hf4/h05/27691794989086/443516_main.jpg_480Wx480H", categoryID: 3, available: true },
      { id: 15, name: "Mirinda", price: 10, imgURL: "https://cdnprod.mafretailproxy.com/sys-master-root/h6d/h24/14539679694878/3798_main.jpg_480Wx480H", categoryID: 3, available: true },
      { id: 16, name: "Spirit", price: 10, imgURL: "https://m.media-amazon.com/images/I/51et8Od6cUL._SX522_.jpg", categoryID: 3, available: true },
      { id: 17, name: "Schweppes", price: 10, imgURL: "https://cdnprod.mafretailproxy.com/sys-master-root/hd6/h95/14584714297374/532193_main.jpg_480Wx480H", categoryID: 3, available: true },
      { id: 18, name: "Birell", price: 15, imgURL: "https://cdnprod.mafretailproxy.com/sys-master-root/hf7/h3c/16748087377950/3847_main.jpg_480Wx480H", categoryID: 3, available: true },
      { id: 19, name: "Redbull", price: 25, imgURL: "https://m.media-amazon.com/images/I/61E28l8RSsL._SL1500_.jpg", categoryID: 3, available: true },
    ]

  }

  getAllProducts() {
    console.log("getAllProducts");    
    return this.productsList
  }
  getProductByID(pID: number): Iproduct | null {
    let findProduct = this.productsList.find(prd => prd.id == pID)
    return findProduct ? findProduct : null
  }

  getProductsByCat(selectedCategoryID: number): Iproduct[] {

    if (selectedCategoryID == 0) {
      return this.productsList
    } else {
      return this.productsList.filter(prd => prd.categoryID == selectedCategoryID)

    }

  }
  addProduct(value:any){    
    return (
      this.productsList.push(value)
      
    )
  }

  // removeFromList(item:any){
  //   console.log(item);
  //   this.productsList.filter(p => p !== item)
  //   this.getAllProducts()
  // }
}
