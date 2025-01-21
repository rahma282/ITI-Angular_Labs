import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { PoductsDetailsComponent } from './poducts-details/poducts-details.component';
import { FormReisterComponent } from './form-reister/form-reister.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardShopComponent } from './card-shop/card-shop.component';

export const routes: Routes = [
 {
  path: '',
  component: ProductsListComponent,
  title: 'Product List'
 },
 {
  path: 'product-details/:id',
  component: PoductsDetailsComponent,
  title: 'Product Details'
 },
{
 path: 'form-register',
 component: FormReisterComponent,
 title: 'Register Form'
},
{
  path: 'form-login',
  component: FormLoginComponent,
  title: 'Login Form'
 },
 {
  path: 'card-shop',
  component: CardShopComponent,
  title: 'Card'
 },
{
  path: '**',
  component: NotFoundComponent,
  title: 'Not Found'
 }
];
