import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-example',
  templateUrl: './home-example.component.html',
  styleUrls: ['./home-example.component.scss']
})
export class HomeExampleComponent implements OnInit {



  dataTable = [
    {title:"Proyecto", data:"UX", extraInfo:"(XER-213)"},
    {title:"Unidad de cuenta", data:"UX"},
    {title:"Año Fiscal", data:"UX"},
    {title:"Periodo", data:"ENE - MARZ"},
    {title:"Integrantes", data:"UX"},
    {title:"Pais", data:"ARG"}];


  listado = [{status:"red",nombre:"Toto",unidad:"UX",rol:"Analista funcional",horas:"120hs",Evaluador:"Erika, la torre"},
  {status:"#000",nombre:"Toto",unidad:"UX",rol:"Analista funcional",horas:"120hs",Evaluador:"Erika, la torre"},
  {status:"yellow",nombre:"Toto",unidad:"UX",rol:"Analista funcional",horas:"120hs",Evaluador:"Erika, la torre"},
  {status:"yellow",nombre:"Toto",unidad:"UX",rol:"Analista funcional",horas:"120hs",Evaluador:"Erika, la torre"},
  {status:"green",nombre:"Toto",unidad:"UX",rol:"Analista funcional",horas:"120hs",Evaluador:"Erika, la torre"}]
  ;

  constructor() { }

  ngOnInit() {
  }

}
