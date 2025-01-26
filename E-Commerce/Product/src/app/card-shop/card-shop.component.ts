import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../service/counter-service.service';
import { HttpService } from '../service/http.service';
import { CardServiceService } from '../service/card-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-shop',
  imports: [CommonModule],
  templateUrl: './card-shop.component.html',
  styleUrls: ['./card-shop.component.css'],
})
export class CardShopComponent {
  @Input() id: number = 0;
  products: Array<any> = [];
  cardProductIds: Array<string> = [];
  filteredProducts: Array<any> = [];
  productCounters: { [key: number]: number } = {};
  totalCounter: number = 0;

  counterService = inject(CounterService);
  productList = inject(HttpService);
  cardService = inject(CardServiceService);
  router = inject(Router);

  ngOnInit() {
    // get card product ids
    this.cardService.getCardId().subscribe((ids: string[]) => {
      this.cardProductIds = ids;
      this.filterProducts();
    });

    // get all products
    this.productList.getProductList().subscribe((res) => {
      this.products = res.products;
      this.filterProducts();
    });

    // total counter
    this.counterService.getCounter().subscribe((res) => (this.totalCounter = res));
  }

  filterProducts() {
    if (this.products.length && this.cardProductIds.length) {
      this.filteredProducts = this.products.filter((product) =>
        this.cardProductIds.includes(product.id.toString())
      );

      this.filteredProducts.forEach((product) => {
        if (!(product.id in this.productCounters)) {
          this.productCounters[product.id] = 1;
        }
      });

      console.log('Filtered Products:', this.filteredProducts);
      console.log('Product Counters:', this.productCounters);
    }
  }

  decreaseCounter(productId: number) {
    if (this.productCounters[productId] > 1) {
      this.productCounters[productId] -= 1;
      this.totalCounter -= 1;
      this.counterService.setCounter(this.totalCounter);
    }
  }

  increaseCounter(productId: number) {
    this.productCounters[productId] += 1;
    this.totalCounter += 1;
    this.counterService.setCounter(this.totalCounter);
  }

  deleteCard(productId: number) {
    if (this.productCounters[productId]) {
      // decrease the total counter by the quantity of the product being deleted
      this.totalCounter -= this.productCounters[productId];
      this.counterService.setCounter(this.totalCounter);
    }

    this.filteredProducts = this.filteredProducts.filter(
      (product) => product.id !== productId
    );

    delete this.productCounters[productId];

    this.cardProductIds = this.cardProductIds.filter(
      (id) => id !== productId.toString()
    );

    console.log(`Product with ID ${productId} deleted.`);
    console.log('Updated Total Counter:', this.totalCounter);
  }

  navigateToRegister() {
    this.router.navigate(['/form-register']); // Navigate to the register form
  }
}

