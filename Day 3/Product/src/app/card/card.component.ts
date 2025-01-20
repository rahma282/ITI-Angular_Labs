import { Component ,Input ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CounterService } from '../service/counter-service.service';


@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  counter:number=0;
  @Input() product : any;

  counterService = inject(CounterService);

  constructor(private router: Router){}

handleRedirect(id: number){
  this.router.navigate(['/product-details' , id])
}
handleAddTOCard(id:number){
  this.counterService.getCounter().subscribe((res)=>this.counter=res);
  this.counterService.setCounter(this.counter+1);
  
}

}