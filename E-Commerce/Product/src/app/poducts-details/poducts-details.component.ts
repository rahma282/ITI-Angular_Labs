import { CounterService } from './../service/counter-service.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Input ,OnInit} from '@angular/core';
import productsData from '../../products.json'
@Component({
  selector: 'app-poducts-details',
  imports: [CommonModule],
  templateUrl: './poducts-details.component.html',
  styleUrl: './poducts-details.component.css'
})
export class PoductsDetailsComponent implements OnInit{
  products :Array<any> = [];
  @Input() id : number=0;
  counter:number=0;
    counterService = inject(CounterService);
    constructor(){}
  product: any;


ngOnInit() {
    this.products = productsData.products;
    this.product = this.products.find((e:any)=>e.id == this.id);
    this.counterService.getCounter().subscribe((res)=>this.counter=res);
    console.log(this.product)
    console.log(this.id);
}
decreaseCounter(){
  if (this.counter>0){
    this.counterService.setCounter(this.counter-1);
  }
}
increaseCounter(){
  this.counterService.setCounter(this.counter+1);
}
}


