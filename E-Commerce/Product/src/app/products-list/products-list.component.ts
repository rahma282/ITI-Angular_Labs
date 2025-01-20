import { Component, inject } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-products-list',
  imports: [CardComponent],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  products :Array<any> = [] ;
  productList = inject(HttpService)
  ngOnInit(){
    this.productList.getProductList().subscribe((res)=>this.products=res.products)
  }
}



