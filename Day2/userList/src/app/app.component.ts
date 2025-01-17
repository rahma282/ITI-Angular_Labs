import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserLsitComponent } from "./user-lsit/user-lsit.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserLsitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'userList';
  
}
