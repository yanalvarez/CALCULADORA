import { Component } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css'] 
})
export class TecladoComponent {
  public resultado = "";

  constructor() {}

  clicar(valor: string) {
    this.resultado += valor;
  }

  limpar() {
    this.resultado = "";
  }

  finalizar() {
    try {
      this.resultado = this.calcularResultado(this.resultado);
    } catch (e) {
      this.resultado = "Erro";
    }
  }

  private calcularResultado(expressao: string): string {
    const resultado = new Function('return ' + expressao)();
    return resultado.toString();
  }
}
