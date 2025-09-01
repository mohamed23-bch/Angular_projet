import { Component } from '@angular/core';
import { SheredService } from '../shered.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajouter',
  imports: [FormsModule],
  templateUrl: './ajouter.component.html',
  styleUrl: './ajouter.component.css'
})
export class AjouterComponent {

  hero = {
    name : '',
    power : 0 ,
    image_url : ''

  }

  heros :any[] = [];

  change()
  {
    this._shared.heros.push(this.hero)
    this.hero = {
    name : '',
    power : 0 ,
    image_url : ''
    

  }

  }

    constructor(public _shared : SheredService){
        
    }

}
