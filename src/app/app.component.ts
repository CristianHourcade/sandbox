import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  dataTable = [
    {title:"Proyecto", data:"UX", extraInfo:"(XER-213)"},
    {title:"Unidad de cuenta", data:"UX"},
    {title:"Año Fiscal", data:"UX"},
    {title:"Periodo", data:"ENE - MARZ"},
    {title:"Integrantes", data:"UX"},
    {title:"Pais", data:"ARG"}];


  listado = [{status:"red",nombre:"Toto",unidad:"UX",rol:"Analista funcional",horas:"120hs",Evaluador:"Erika, la torre"},
  {status:"yellow",nombre:"Toto",unidad:"UX",rol:"Analista funcional",horas:"120hs",Evaluador:"Erika, la torre"},
  {status:"yellow",nombre:"Toto",unidad:"UX",rol:"Analista funcional",horas:"120hs",Evaluador:"Erika, la torre"},
  {status:"yellow",nombre:"Toto",unidad:"UX",rol:"Analista funcional",horas:"120hs",Evaluador:"Erika, la torre"},
  {status:"green",nombre:"Toto",unidad:"UX",rol:"Analista funcional",horas:"120hs",Evaluador:"Erika, la torre"}]
  ;

  constructor(){

  }

  ngOnInit(){

  }
  title = 'aux-bootstrap-angular';
}
