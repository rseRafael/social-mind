import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeemediaContentService {
  public completos: Array<any> = [];
  public monitorando: Array<any> = [];
  public futuro: Array<any> = [];
  public erros: Array<any> = [];

  constructor() { 
  }

  setService(c: Array<any>, m: Array<any>, f: Array<any>, e: Array<any>){
    this.completos = c;
    this.monitorando = m;
    this.futuro = f;
    this.erros = e;
    console.log(this.completos);
  }
}
