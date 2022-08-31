import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

//Pagina de inicio
import { PagInicioComponent } from './Components/pag-inicio/pag-inicio.component';

//Login
import { LoginComponent } from './Components/Login/login.component';

//tarifa
import { ListTarifaComponent } from './Components/Tarifa/list-tarifa/list-tarifa.component';
import { EditTarifaComponent } from './Components/Tarifa/edit-tarifa/edit-tarifa.component';
import { AddTarifaComponent } from './Components/Tarifa/add-tarifa/add-tarifa.component';

//Distrito
import { ListDistritoComponent } from './Components/Distrito/list-distrito/list-distrito.component';
import { AddDistritoComponent } from './Components/Distrito/add-distrito/add-distrito.component';
import { EditDistritoComponent } from './Components/Distrito/edit-distrito/edit-distrito.component';
import { TarifarioComponent } from './Components/Tarifario/tarifario.component';

//INICIO SERVICIOS
import { CargarScriptService } from './app.componentScript';
// FIN SERVICIOS


@NgModule({
  declarations: [
    AppComponent,
    ListTarifaComponent,
    EditTarifaComponent,
    AddTarifaComponent,
    ListDistritoComponent,
    AddDistritoComponent,
    EditDistritoComponent,
    LoginComponent,
    PagInicioComponent,
    TarifarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule
  ],
  providers: [
    CargarScriptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
