import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private formB:FormBuilder,
    private router:Router,
  ) { 

  }
  productos = [
    {
      nombre: 'Auriculares XYZ',
      imagen: 'https://via.placeholder.com/300x300?text=Producto',
      precioDescuento: 980.00,
      precioOriginal: 990.00
    },
    // Puedes añadir más productos aquí
  ];

  details(){
    this.router.navigate(['details',1]);
  }
}
