import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  idliga:number=1
  idLiga:string="";
  urlFecha:string=""
  status:string = '';
  errorMessage:string = '';
  ApuestasController:string= '';
  dataSt:any;
  HomeController:string= '';
  DatesController:string= '';
  NextDatesController:string= '';
  NodeController:string= '';
  FormDataSelectBet: FormGroup;
  
  /*itemNextDate:entityNextDateI[]=[];
  itemLinks=<entityLinksDatesI>{};
  itemBanking=<entityBanking>{};
  itemListLeague:entityLeaguesI[]=[];
  itemsListPronostico:entityPronosticoI[]=[];
  itemActivos:entityApuestasI[] = [];
  itemNombreEquipos:entityNombreEquipoGetI[] = [];
  listRequest:entityLinksDatesI[] = [];
  listPronosticos:entityPronosticoI[] = [];*/
  
  constructor( private router:Router, private formB:FormBuilder) { 
    this.FormDataSelectBet= this.formB.group({
      fecha:['',Validators.required],
      equipo1:['',Validators.required],
      equipo2: ['',Validators.required],
      mercado: ['',Validators.required],
      cuotaAprox: ['',Validators.required],
      pctjeAprox: ['',Validators.required],
      cuota:['',Validators.required],
      acomulado:['',Validators.required],
      kelly:['',Validators.required],
      betkelly:['',Validators.required],
      profit:['',Validators.required],
      observacion:['',Validators.required],
    })

  }

  ngOnInit(): void {

    
  }

  addBet(){

  }

  calcularKelly(){
    
  }
}
