import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CounterService } from '../service/counter-service.service';
import { CardServiceService } from '../service/card-service.service';
@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  counter: number = 0;
  @Input() product: any;
  CardProducts: any = [];
  counterService = inject(CounterService);

  constructor(
    private router: Router,
    private cardServiceService: CardServiceService
  ) {}

  handleRedirect(id: number) {
    this.router.navigate(['/product-details', id]);
  }

  handleAddTOCard(id: number) {
    this.counterService.getCounter().subscribe((res) => (this.counter = res));
    this.counterService.setCounter(this.counter + 1);
    if (!this.CardProducts.includes(id)) {
      this.CardProducts.push(id);
      this.cardServiceService.addCardId(id.toString());
    } //then take array of ids and use it on card shop component
  }
}
