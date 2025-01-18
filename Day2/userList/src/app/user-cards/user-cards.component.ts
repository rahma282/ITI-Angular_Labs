import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-cards',
  imports: [CommonModule],
  templateUrl: './user-cards.component.html',
  styleUrl: './user-cards.component.css'
})
export class UserCardsComponent {
  @Input() user : any;
  
}
