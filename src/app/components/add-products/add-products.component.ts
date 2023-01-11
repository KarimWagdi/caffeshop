import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Icategory } from 'src/app/interface/icategory';
import { Iproduct } from 'src/app/interface/iproduct';
import { MyProductsService } from 'src/app/services/my-products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  productsList: Iproduct[] = []
  newProduct: any = []
  categoryList: Icategory[] = []
  base64: any = ""
  form!: FormGroup
  @ViewChild("successBox") successBox!: ElementRef;
  constructor(private _proService: MyProductsService, private build: FormBuilder) {

    this.newProduct = this._proService

  }
  // 
  ngOnInit(): void {

    this.form = this.build.group({
      id: ["20", [Validators.required]],
      name: ["", [Validators.required]],
      price: ["", [Validators.required]],
      imgURL: ["", [Validators.required]],
      categoryID: ["", [Validators.required]],
      available: true
    })
  }

  getImgPath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.form.get("imgURL")?.setValue(this.base64)

    }
  }

  addproduct() {
    this.newProduct.addProduct(this.form.value)
    this.successBox.nativeElement.style.display="flex";

  }
  close(){
    this.successBox.nativeElement.style.display="none"
  }
}
