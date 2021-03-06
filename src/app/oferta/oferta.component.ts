import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import {CarrinhoService} from '../carrinho.service';

@Component({
  selector: 'pu-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers:[OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta:Oferta

  constructor(private route:ActivatedRoute, private ofertasService:OfertasService, private carrinhoService: CarrinhoService) { 
  }

  ngOnInit() {
    this.route.params.subscribe((parametros:Params) =>{
      this.ofertasService.getOfertasPorId(parametros.id)
      .subscribe((oferta:Oferta) => {
        this.oferta = oferta
      })
    })
    
  }

  ngOnDestroy(){
  }

  public adicionarItemCarrinho():void{
    this.carrinhoService.incluirItem(this.oferta)
    this.carrinhoService.exibirItens()
  }

}
