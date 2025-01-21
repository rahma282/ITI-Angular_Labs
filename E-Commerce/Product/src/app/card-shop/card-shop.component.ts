import { CounterService } from './../service/counter-service.service';
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '../service/http.service';
import { CardServiceService } from '../service/card-service.service';
@Component({
  selector: 'app-card-shop',
  imports: [CommonModule],
  templateUrl: './card-shop.component.html',
  styleUrls: ['./card-shop.component.css'],
})
export class CardShopComponent {
  products: Array<any> = [];
  @Input() id: number = 0;

  counter: number = 0;

  counterService = inject(CounterService);
  productList = inject(HttpService);
  cardService = inject(CardServiceService);
  product: any = [];
  cardProductIds!: Array<string>;

  ngOnInit() {
    this.cardService.getCardId().subscribe((ids: string[]) => {
      this.cardProductIds = ids; // update the local array when the card changes
    });

    console.log(this.cardProductIds, ' card product ids from service ');

    //this.productList.getProductList().subscribe((res) => {
      //this.products = res.products;
    //});

    if (this.cardProductIds.length) {
      this.product = this.cardProductIds.find((e: any) => e.id == this.id);
      if (this.product) {
        this.product.push(this.id);
      } else {
        console.error(`Product with ID ${this.id} not found.`);
      }
    }

    console.log(this.id, 'this is product id');
    console.log(this.products);
    console.log(this.product);
    console.log(this.id);

    this.counterService.getCounter().subscribe((res) => (this.counter = res));
    console.log(this.counter);
  }
  decreaseCounter() {
    this.counterService.setCounter(this.counter - 1);
  }
  increaseCounter() {
    this.counterService.setCounter(this.counter + 1);
  }
  deleteCounter() {
    this.counterService.setCounter((this.counter = 0));
  }
}

// <div class="product-image">
//       <img [src]="product.thumbnail" alt="Airpods Max">
//       <div >

//         <!-- @for (item of product.images; track $index) {
//           <img [src]="item" alt="Airpods Max" width="100" height="100" >
//           <br>
//         } -->
//       </div>

//       <div class="product-price">{{product.price|currency:'EGP'}}</div>

//       <div class="quantity-control">
//         <button (click)="decreaseCounter()">-</button>
//         <input type="text" value={{counter}} min="1" disabled style="font-weight: bold; color:black">
//         <button (click)="increaseCounter()">+</button>
//         <button (click)="deleteCounter()">x</button>
//       </div>

//         <button class="btn btn-light" style="margin: 20px;">Check out</button>
//     </div>
