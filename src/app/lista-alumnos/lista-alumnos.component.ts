import { Component } from '@angular/core';

interface IALumno {
  nombre: string;
  curso: string;
  fechaIngreso: Date;
}

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {

  email = '';

  enabledListaAlumnos = true;

  alumnos: IALumno[] = [
    {
      nombre: 'Andres Gutierrrez',
      curso: 'Angular',
      fechaIngreso: new Date(),
    },
    {
      nombre: 'Mariana Iglesias',
      curso: 'React',
      fechaIngreso: new Date(),
    },
    {
      nombre: 'Valeria Rossi',
      curso: 'Angular',
      fechaIngreso: new Date(),
    },
    {
      nombre: 'Matias Pereira',
      curso: 'Vue',
      fechaIngreso: new Date(),
    },
    {
      nombre: 'Paloma Vargas',
      curso: 'Python',
      fechaIngreso: new Date(),
    },
  ]

}
