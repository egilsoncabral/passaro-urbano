import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { interval } from 'rxjs';

@Component({
  selector: 'pu-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers:[OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta:Oferta

  constructor(private route:ActivatedRoute, private ofertasService:OfertasService) { 
  }

  ngOnInit() {
    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])
    .then((oferta:Oferta) => {
      this.oferta = oferta
    })
    // this.route.params.subscribe(
    //   (parametro:any)=>{    },
    //   (erro:any) => {},
    //   () => {}
    // )
    let tempo = interval(500);
    tempo.subscribe((intervalo:number)=>{
    })


  }

}
