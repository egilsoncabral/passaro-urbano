import {Oferta} from './shared/oferta.model'
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { URL_API } from './app.api';
import { Observable, Subject } from 'rxjs';
import { map, retry } from 'rxjs/operators';

@Injectable()
export class OfertasService{


    constructor(private http:HttpClient){}

    public getOfertas():Observable<any>{
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
        .pipe(
            map((resposta: Response) => resposta)
         )
    }

    public getOfertasPorCategoria(categoria:string): Observable<any>{
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
        .pipe(
            map((resposta: Response) => resposta)
         )

    }

    public getOfertasPorId(id:number): Observable<any>{
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
        .pipe(
            map((resposta: Response) => resposta[0])
         )

    }

    public getComoUsarOfertaPorId(id:number): Observable<any>{
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
        .pipe(
            map((resposta: Response) => resposta[0].descricao)
         )
    }

    public getOndeFicaOfertaPorId(id:number): Observable<any>{
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
        .pipe(
            map((resposta: Response) => resposta[0].descricao)
         )
    }

    public pesquisaOfertas(termo: string): Observable<any>{
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`).pipe(
            map((resposta: Response) => resposta)
         )
    }

}