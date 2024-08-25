import RecursoBibliografico from "./RecursoBibliografico.js";

export default class Revista extends RecursoBibliografico {
  ISSN!: string;
  numeroVolumen!: string;
  fechaPublicacion!: string;
  periodicidad!: string;

  constructor(
    codigo: string,
    titulo: string,
    ISSN: string,
    numeroVolumen: string,
    fechaPublicacion: string,
    periodicidad: string
  );
  constructor(
    codigo: string,
    titulo: string,
    ISSN: string,
    numeroVolumen: string,
    fechaPublicacion: string,
    periodicidad: string,
    estaDisponible: boolean
  );
  constructor(
    codigo: string,
    titulo: string,
    ISSN: string,
    numeroVolumen: string,
    fechaPublicacion: string,
    periodicidad: string,
    estaDisponible?: boolean
  ) {
    estaDisponible !== undefined
      ? super(codigo, titulo, estaDisponible)
      : super(codigo, titulo);
    this.setISSN(ISSN);
    this.setNumeroVolumen(numeroVolumen);
    this.setFechaPublicacion(fechaPublicacion);
    this.setPeriodicidad(periodicidad);
  }

  // getters y setters

  public getISSN() {
    return this.ISSN;
  }

  public setISSN(ISBN: string) {
    this.ISSN = ISBN;
  }

  public getNumeroVolumen() {
    return this.numeroVolumen;
  }

  public setNumeroVolumen(numeroVolumen: string) {
    this.numeroVolumen = numeroVolumen;
  }

  public getFechaPublicacion() {
    return this.fechaPublicacion;
  }

  public setFechaPublicacion(fechaPublicacion: string) {
    this.fechaPublicacion = fechaPublicacion;
  }

  public getPeriodicidad() {
    return this.periodicidad;
  }

  public setPeriodicidad(periodicidad: string) {
    if (!["Semanal", "Mensual", "Anual"].includes(periodicidad)) {
      throw new Error(`Periodicidad inválida: ${periodicidad}`);
    }
    this.periodicidad = periodicidad;
  }

  // metodos

  prestar(): number {
    return 4;
  }
}
