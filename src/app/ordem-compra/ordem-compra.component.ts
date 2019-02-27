import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pu-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {


  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string = ''

  //Controle
  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean


  constructor() { }

  ngOnInit() {
  }

  public atualizaEndereco(endereco:string):void{
    this.endereco = endereco
    this.enderecoValido = endereco.length > 3 ? true : false
  }

  public atualizaNumero(numero:string):void{
    this.numero = numero
    this.numeroValido = numero.length > 0 ? true : false
  }

  public atualizaComplemento(complemento:string):void{
    this.complemento = complemento
    this.complementoValido = complemento.length > 0 ? true : false
  }

  public atualizaFormaPagamento(formaPagamento:string):void{
    this.formaPagamento = formaPagamento
    this.formaPagamentoValido = formaPagamento.length > 0 ? true : false
  }

}
