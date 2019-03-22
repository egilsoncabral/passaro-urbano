import { Component, OnInit, ViewChild } from '@angular/core';
import  OrdemCompraService  from '../ordem-compra.service'
import  Pedido  from '../shared/pedido.model'
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra:number

  @ViewChild('formulario')
  public formulario:NgForm

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  public confirmarCompra() : void{

    let pedido : Pedido = new Pedido(this.formulario.value.endereco, this.formulario.value.numero, this.formulario.value.complemento, this.formulario.value.formaPagamento)

    this.ordemCompraService.efetivarCompra(pedido).subscribe((resposta) =>{
        if (resposta.id) {
          this.idPedidoCompra = resposta.id
        }
    })
  }
}
