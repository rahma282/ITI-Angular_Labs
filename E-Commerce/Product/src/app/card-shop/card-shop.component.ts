import { CounterService } from './../service/counter-service.service';
import { Component, inject ,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import productsData from '../../products.json'

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
  CardProducts:any=[];

  counterService = inject(CounterService);
  constructor(){}
  product: any;


ngOnInit() {
    this.products = productsData.products;
    this.product = this.products.find((e:any)=>e.id == this.id);
    if (this.product) {
      this.CardProducts.push(this.id);
  }
  else{
    console.error(`Product with ID ${this.id} not found.`);
  }
    console.log(this.products)
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
