import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  cards :string[]=[
    'WEB DESIGN','MOBILE DESIGN',
     'LOGO DESIGN','WEB APPLICATION DEVELOPMENT',
     'MOBILE APPLICTION DEEVELOMENT','PWA DEVELOPMENT'
  ]
}

