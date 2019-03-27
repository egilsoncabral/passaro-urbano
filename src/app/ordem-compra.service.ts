import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import Pedido from './shared/pedido.model'
import { Observable } from 'rxjs';
import {URL_API} from './app.api';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export default class OrdemCompraService{
    
    constructor(private http: HttpClient){}

    public efetivarCompra(pedido : Pedido):Observable<any>{
        let headers : HttpHeaders = new HttpHeaders()
        headers.append('Content-type', 'application/json')
        return this.http.post(
            `${URL_API}/pedidos`,
            {pedido},
            {headers: headers}
        )
        .pipe(
           map((resposta: Response) => 
           resposta
           )
        )
    }
}