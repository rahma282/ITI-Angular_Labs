import { CounterService } from './../service/counter-service.service';
import { Component, inject ,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '../service/http.service';
@Component({
  selector: 'app-card-shop',
  imports: [CommonModule],
  templateUrl: './card-shop.component.html',
  styleUrls: ['./card-shop.component.css']
})
export class CardShopComponent {
  products :Array<any> = [];
  @Input() id : number=0;

  counter:number=0;

  counterService = inject(CounterService);
  productList = inject(HttpService)
  product: any=[];


ngOnInit() {
  this.productList.getProductList().subscribe((res)=>this.products=res.products)
    this.product = this.products.find((e:any)=>e.id == this.id);
    if (this.product) {
      this.product.push(this.id);
  }
  else{
    console.error(`Product with ID ${this.id} not found.`);
  }
    console.log(this.products)
    console.log(this.product)
    console.log(this.id);


    this.counterService.getCounter().subscribe((res)=>this.counter=res);
    console.log(this.counter)
}
  decreaseCounter(){
    this.counterService.setCounter(this.counter-1);
  }
  increaseCounter(){
    this.counterService.setCounter(this.counter+1);
  }
  deleteCounter(){
    this.counterService.setCounter(this.counter =0);
  }
}
