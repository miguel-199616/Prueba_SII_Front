import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmpleadoDTO } from 'src/app/model/empleadoDTO';
import { ObjetoString } from 'src/app/model/objetoString';
import { EmpleadosService } from 'src/app/servicios/empleadosService/empleados.service';
import { Constantes } from 'src/app/utils/constantes';
import { ConfiguracionPaginacion } from 'src/app/utils/Paginator';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss'],
  providers:[{provide: MatPaginatorIntl, useValue:ConfiguracionPaginacion()}]
})
export class ConsultarComponent implements OnInit {

  readonly TITULO_PANTALLA_CONSULTAR_EMPLEADOS = Constantes.TITULO_PANTALLA_CONSULTAR_EMPLEADOS;

  @ViewChild(MatPaginator, {static:false}) set matPaginator(paginator:MatPaginator){
    this.paginator=paginator;
  };
  @ViewChild(MatSort, { static: true })

  paginator:MatPaginator | undefined;
  consultaEmpleadoFormulario!: FormGroup;
  sort: MatSort = new MatSort;
  displayedColumns: string[] = ['employee_name', 'employee_salary', 'employee_salary_year']
  dataSource = new MatTableDataSource<EmpleadoDTO>([]);
  listaEmpleados: EmpleadoDTO[] = [];

  constructor(private formBuilder: FormBuilder, private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.construirFormulario();
  }

  /**
   * Método para construir el formulario de la pantalla
   * @author Miguel Angel Hernandez Cubillos
   */
  construirFormulario() {
    this.consultaEmpleadoFormulario = this.formBuilder.group({
      idEmpleado: ['', Validators.pattern(/^[a-z][A-Z]d+$/)]
    });
  }

  /**
   * Método encargado de consumir el servicio de consultar empleados
   * @author Miguel Angel Hernandez Cubillos
   */
  consultarEmpleados() {
    this.listaEmpleados=[];
    const idEmpleado = this.consultaEmpleadoFormulario.controls['idEmpleado'].value;
    let objeto = new ObjetoString;
    objeto.mensaje = idEmpleado;
    this.empleadosService.consultarEmpleados(objeto).subscribe({
      next: (respuesta) => {
        if (respuesta.exitoso) {
          if (respuesta.data) {
            if(Array.isArray(respuesta.data.data)){
              respuesta.data.data.forEach(empleado => {
                empleado.employee_salary_year = this.calcularSalarioAnual(empleado.employee_salary);
                this.listaEmpleados.push(empleado);
              });
              
            }else{
              let empleado : EmpleadoDTO = respuesta.data.data;
              empleado.employee_salary_year = this.calcularSalarioAnual(empleado.employee_salary);
              this.listaEmpleados.push(empleado);
            }            
            this.cargarTabla();
          }
        }
      }
    });

  }

  /**
   * Método encargado de cargar la información en la tabla
   * @author Miguel Ángel Hernández Cubillos
   */
  cargarTabla() {
    this.dataSource = new MatTableDataSource<EmpleadoDTO>(this.listaEmpleados);
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort;
  }

  /**
   * Método para calcular el valor anual del salario
   * @param valorACalcular  valor mensual del salario
   * @returns valor anual del salario
   * @author Miguel Angel Hernandez Cubillos
   */
  calcularSalarioAnual(valorACalcular:number): number{
    return valorACalcular*12;
  }
}
