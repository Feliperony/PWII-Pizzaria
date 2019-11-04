import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'has-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  formcomanda: FormGroup;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formcomanda = this.formBuilder.group({
      chopp : this.formBuilder.control(''),
      pizzas : this.formBuilder.control(''),
      recheios : this.formBuilder.control(''),
      pessoas : this.formBuilder.control(''),
      pagaservico : this.formBuilder.control(true)})
  }
  onProcessar(){
    
    console.log(this.formcomanda.value);
  }
}

