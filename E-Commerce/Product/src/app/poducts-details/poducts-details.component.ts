import { CounterService } from './../service/counter-service.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Input} from '@angular/core';
import { HttpService } from '../service/http.service';
@Component({
  selector: 'app-poducts-details',
  imports: [CommonModule],
  templateUrl: './poducts-details.component.html',
  styleUrl: './poducts-details.component.css'
})
export class PoductsDetailsComponent {
  //products :Array<any> = [];
  @Input() id : string='';
  counter:number=0;

    counterService = inject(CounterService);
    productDetails = inject(HttpService)
    product: any;


ngOnInit() {
    this.productDetails.getProductDetails(this.id).subscribe((res)=>this.product=res)
    this.counterService.getCounter().subscribe((res)=>this.counter=res);
    console.log(this.product)
    console.log(this.id);
}
handleAddTOCard(id:number){
  this.counterService.getCounter().subscribe((res)=>this.counter=res);
  this.counterService.setCounter(this.counter+1);
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


