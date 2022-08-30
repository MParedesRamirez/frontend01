import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Tarifas } from 'src/app/Models/tarifa';
import { RespuestaCommon } from 'src/app/Models/respuesta';

@Injectable({
  providedIn: 'root'
})

export class ServiceTarifaService {

  private urlServicioRest = 'http://localhost:8090/rest/Tarifa';

  constructor(private httpClient: HttpClient) { }

  getTarifaList(): Observable<Tarifas[]>{
    return this.httpClient.get<Tarifas[]>(this.urlServicioRest + '/listar');
  }

  getTarifaByID(id: string | null): Observable<Tarifas>{
    return this.httpClient.get<Tarifas>(`${this.urlServicioRest}/buscar/${id}`);
  }

  saveTarifa(data: Tarifas | null): Observable<RespuestaCommon>{
    return this.httpClient.post<RespuestaCommon>(this.urlServicioRest + '/agregar', data)
  }

  updateTarifa(id: string  | null, data: Tarifas | null): Observable<RespuestaCommon>{
    return this.httpClient.put<RespuestaCommon>(`${this.urlServicioRest}/editar/${id}`, data);
  }

  deleteTarifa(id: string | null): Observable<RespuestaCommon>{
    console.log("Invocando metodo de eliminación");
    console.log(`${this.urlServicioRest}/borrar/${id}`)
    return this.httpClient.delete<RespuestaCommon>(`${this.urlServicioRest}/borrar/${id}`);
  }

}
