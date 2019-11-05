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
    
    let totalChopp = this.formcomanda.value.chopp * 7.30 ;
    let totalpizzas = this.formcomanda.value.pizzas * 31.50 ;
    let totalrecheios = this.formcomanda.value.recheios * 5.90 ;

    let consumo = totalChopp + totalpizzas + totalrecheios ;
    let servico = consumo / 10 ;
    let total = consumo + servico ;
    let totalporpessoa =  total / this.formcomanda.value.pessoas;

    alert("consumo: " + consumo +"\n" + "Serviço: " + servico + "\n" + "Total: " + total + "\n" + "Por pessoa: " + totalporpessoa );


  }
}

