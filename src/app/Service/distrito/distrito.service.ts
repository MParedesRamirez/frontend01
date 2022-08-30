import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Distritos } from 'src/app/Models/Distrito';
import { RespuestaCommon } from 'src/app/Models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class DistritoService {

  private urlServicioRest = 'http://localhost:8090/rest/Distrito';

  constructor(private httpClient: HttpClient) { }

  getDistritoList(): Observable<Distritos[]>{
    return this.httpClient.get<Distritos[]>(this.urlServicioRest + '/listar');
  }

  getDistritoByID(id: string | null): Observable<Distritos>{
    return this.httpClient.get<Distritos>(`${this.urlServicioRest}/buscar/${id}`);
  }

  saveDistrito(data: Distritos | null): Observable<RespuestaCommon>{
    return this.httpClient.post<RespuestaCommon>(this.urlServicioRest + '/agregar', data)
  }

  updateDistrito(id: string  | null, data: Distritos | null): Observable<RespuestaCommon>{
    return this.httpClient.put<RespuestaCommon>(`${this.urlServicioRest}/editar/${id}`, data);
  }

  deleteDistrito(id: string | null): Observable<RespuestaCommon>{
    console.log("Invocando metodo de eliminación");
    console.log(`${this.urlServicioRest}/borrar/${id}`)
    return this.httpClient.delete<RespuestaCommon>(`${this.urlServicioRest}/borrar/${id}`);
  }

}
