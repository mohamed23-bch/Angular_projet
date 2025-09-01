import { Component } from '@angular/core';
import { SheredService } from '../shered.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [FormsModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {



  constructor(public _shared : SheredService){

  }
}
