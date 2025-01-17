import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { AboutmeComponent } from "./aboutme/aboutme.component";
import { SkillComponent } from "./skill/skill.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [HeroComponent, AboutmeComponent, SkillComponent,  PortfolioComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
