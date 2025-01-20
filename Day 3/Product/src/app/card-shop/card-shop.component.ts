import { CounterService } from './../service/counter-service.service';
import { Component, inject ,Input } from '@angular/core';
import productsData from '../../products.json'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-shop',
  imports: [CommonModule],
  templateUrl: './card-shop.component.html',
  styleUrl: './card-shop.component.css'
})
export class CardShopComponent {
  products :Array<any> = [];
  @Input() id : number=0;

  counter:number=0;

  counterService = inject(CounterService);

  product: any;


ngOnInit() {
    this.products = productsData.products;
    this.product = this.products.find((e:any)=>e.id == this.id);
    this.counterService.getCounter().subscribe((res)=>this.counter=res);
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
