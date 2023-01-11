import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { UserOrderComponent } from './components/user-order/user-order.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'login', component: ProductsComponent },
  { path: 'logout', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'order', component: UserOrderComponent },
  { path: 'allProducts/addProduct', redirectTo: "addProduct", pathMatch: "full"  },
  { path: 'addProduct', component: AddProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: UserOrdersComponent },
  { path: 'users', component: UsersComponent},
  {path: "allProducts" , component:AllProductsComponent},
  {path: "register" , component:RegisterComponent},
  { path: 'users/addUsers', redirectTo: "addUsers", pathMatch: "full"  },
  { path: "addUsers" , component: AddUsersComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
