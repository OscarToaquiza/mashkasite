import { Component, OnInit } from '@angular/core';
import { Persona } from './personal.model';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {


  public equipo: Persona[] = [
    {
      nombre: "Richard",
      apellido: "Gallardo",
      cargo: "Desarrollador de Software",
      email: "mailto:richard.gallardo.mashkasoft@gmail.com",
      url_foto: "assets/img/equipo_1.jpg",
      whatsapp: "https://wa.me/+593983898326",
      linkedin: ""
    },
    {
      nombre: "Oscar",
      apellido: "Toaquiza",
      cargo: "Desarrollador de Software",
      email: "mailto:oscar.toaquiza.mashkasoft@gmail.com",
      url_foto: "assets/img/equipo_1.jpg",
      whatsapp: "https://wa.me/+593983898326",
      linkedin: ""
    },
    {
      nombre: "Mauro",
      apellido: "Morales",
      cargo: "Desarrollador Software",
      email: "mailto:mauro.morales.mashkasoft@gmail.com",
      url_foto: "assets/img/equipo_1.jpg",
      whatsapp: "https://wa.me/+593983898326",
      linkedin: ""
    },
    {
      nombre: "Jenny",
      apellido: "Rocha",
      cargo: "Desarrollador Software",
      email: "mailto:jenny.rocha.mashkasoft@gmail.com",
      url_foto: "assets/img/equipo_1.jpg",
      whatsapp: "https://wa.me/+593983898326",
      linkedin: ""
    },
    {
      nombre: "Ricardo",
      apellido: "Muñoz",
      cargo: "Desarrollador Software",
      email: "mailto:ricardo.munioz.mashkasoft@gmail.com",
      url_foto: "assets/img/equipo_1.jpg",
      whatsapp: "https://wa.me/+593983898326",
      linkedin: ""
    },
    {
      nombre: "Daniel",
      apellido: "Quingaluisa",
      cargo: "Desarrollador Software",
      email: "mailto:daniel.quingaluisa.mashkasoft@gmail.com",
      url_foto: "assets/img/equipo_1.jpg",
      whatsapp: "https://wa.me/+593983898326",
      linkedin: ""
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

