import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { AjouterComponent } from './ajouter/ajouter.component';
// import { ListComponent } from './list/list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { MiniProjetComponent } from './mini-projet/mini-projet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-projet';
}

