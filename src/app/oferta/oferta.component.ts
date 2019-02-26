import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { interval, Subscription, Observable, Observer } from 'rxjs';

@Component({
  selector: 'pu-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers:[OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta:Oferta

  constructor(private route:ActivatedRoute, private ofertasService:OfertasService) { 
  }

  ngOnInit() {

    this.route.params.subscribe((parametros:Params) =>{
      this.ofertasService.getOfertasPorId(parametros.id)
      .then((oferta:Oferta) => {
        this.oferta = oferta
      })
    })
    
  }

  ngOnDestroy(){
  }

}
