import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import '../util/rxjs-extensions';

@Component({
  selector: 'pu-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas:Observable<Oferta[]>
  public ofertas2:Oferta[]
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
    .debounceTime(100)
    .distinctUntilChanged()
    .switchMap((termo:string) => {
      if(termo.trim() === ''){
        return Observable.of<Oferta[]>([])
      }
      return this.ofertasService.pesquisaOfertas(termo)
    }).catch((erro:any) => {
      return Observable.of<Oferta[]>([])
    })
  }

  public pesquisa(termoPesquisa: string):void{
    this.subjectPesquisa.next(termoPesquisa)
  }

  public limpaPesquisa():void{
    this.subjectPesquisa.next('')
    //document.querySelector('#seach').setAttribute('value', '')
  }

}
