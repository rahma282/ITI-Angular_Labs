import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from "./card/card.component";
import { CardShopComponent } from "./card-shop/card-shop.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CardComponent, CardShopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Product';
}
