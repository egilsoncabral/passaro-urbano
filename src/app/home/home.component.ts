import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'pu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas:Array<Oferta>

  constructor(private ofertasServices : OfertasService) { }

  ngOnInit() {
    //console.log(this.ofertasServices.getOfertas())
    //this.ofertas = this.ofertasServices.getOfertas()
    this.ofertasServices.getOfertas()
    .then((ofertas: Array<Oferta>) => { 
      this.ofertas = ofertas 
    })
    .catch((param:any) => {
      console.log(param)
    })
  }

}
