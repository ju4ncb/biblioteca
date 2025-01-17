import RecursoBibliografico from "./RecursoBibliografico.js";

export default class VideoEducativo extends RecursoBibliografico {
  formato!: string;
  duracionSegundos!: number;
  añoCreacion!: number;

  constructor(
    codigo: string,
    titulo: string,
    formato: string,
    duracionSegundos: number,
    añoCreacion: number
  );
  constructor(
    codigo: string,
    titulo: string,
    formato: string,
    duracionSegundos: number,
    añoCreacion: number,
    estaDisponible: boolean
  );
  constructor(
    codigo: string,
    titulo: string,
    formato: string,
    duracionSegundos: number,
    añoCreacion: number,
    estaDisponible?: boolean
  ) {
    estaDisponible !== undefined
      ? super(codigo, titulo, estaDisponible)
      : super(codigo, titulo);
    this.setFormato(formato);
    this.setDuracionSegundos(duracionSegundos);
    this.setAñoCreacion(añoCreacion);
  }

  // getters y setters

  public getFormato() {
    return this.formato;
  }

  public setFormato(formato: string) {
    if (!["CD", "VHS", "Blu-Ray"].includes(formato)) {
      throw new Error(`Formato inválido: ${formato}`);
    }
    this.formato = formato;
  }

  public getDuracionSegundos() {
    return this.duracionSegundos;
  }

  public setDuracionSegundos(duracionSegundos: number) {
    this.duracionSegundos = duracionSegundos;
  }

  public getAñoCreacion() {
    return this.añoCreacion;
  }

  public setAñoCreacion(añoCreacion: number) {
    this.añoCreacion = añoCreacion;
  }

  // metodos

  prestar(): number {
    if (this.añoCreacion >= 2015) {
      return 2;
    }
    return 5;
  }
}
