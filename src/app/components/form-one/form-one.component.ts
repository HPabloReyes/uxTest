import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css'],
})
export class FormOneComponent {
  opciones = [
    '2021 CHGS Garantizar que los datos y estadistica relacionada con gente estén actualizados, sistematizados y sean útiles para la toma de deciciones.',
    '2021 CHGS Asegurar que losDirectivos de unidades (negocios y despachos) gestionen con base en el modelo de alto desempeño para elegirlo eficientemente',
    '2021 CH AyC, Gestionar a los equipos Directivos bajo el Modelo de Alto Desempeño cuidando la implementacion de los 6 paos',
    '2021 CH BOFF Fortalecer una cultura de alto desempeño impulsando la adopcion del modelo de los 6 pasos.',
    '2021 Totalplay paso 6: Fomentar y consolidar el proceso de evaluacion de desempeño en Grupo Totalpay alineado al Modelo de 6 pasos',
    '2021 CH EKT. Implementar e Impulsar la adopción del modelo de los 6 pasos como componente clave de la cultura Elektra Marca, conectividad ',
  ];

  proyectos: any[] = []; // Arreglo para almacenar los proyectos

  formData: any = {}; // Objeto para almacenar los datos del formulario

  onSubmit(form: any) {
    if (form.valid) {
      // Crea un objeto proyecto con los datos del formulario
      const proyecto = {
        id_sistema: this.formData.id_sistema,
        nombre_proyecto: this.formData.nombre_proyecto,
        descripcion: this.formData.descripcion,
        objetivos: this.formData.objetivos,
        fecha_inicio: this.formData.fecha_inicio,
        fecha_fin: this.formData.fecha_fin,
      };

      // Agrega el proyecto al arreglo de proyectos
      this.proyectos.push(proyecto);

      console.log('Proyectos:', this.proyectos);

      // Aquí puedes agregar la lógica para enviar los datos a través de un servicio o realizar otras acciones necesarias

      // Puedes resetear el formulario después de enviar los datos si es necesario
      form.reset();
    }
  }
}
