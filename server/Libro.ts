import RecursoBibliografico from "./RecursoBibliografico.js";

export default class Libro extends RecursoBibliografico {
  ISBN!: string;
  categoria!: string;

  constructor(codigo: string, titulo: string, ISBN: string, categoria: string);
  constructor(
    codigo: string,
    titulo: string,
    ISBN: string,
    categoria: string,
    estaDisponible: boolean
  );
  constructor(
    codigo: string,
    titulo: string,
    ISBN: string,
    categoria: string,
    estaDisponible?: boolean
  ) {
    estaDisponible !== undefined
      ? super(codigo, titulo, estaDisponible)
      : super(codigo, titulo);
    this.setISBN(ISBN);
    this.setCategoria(categoria);
  }

  // getters y setters

  public getISBN() {
    return this.ISBN;
  }

  public setISBN(ISBN: string) {
    this.ISBN = ISBN;
  }

  public getCategoria() {
    return this.categoria;
  }

  public setCategoria(categoria: string) {
    if (!["General", "Reserva"].includes(categoria)) {
      throw new Error(`Categoría inválida: ${categoria}`);
    }
    this.categoria = categoria;
  }

  // metodos

  prestar(): number {
    if (this.categoria === "General") {
      return 3;
    } else {
      return 1;
    }
  }
}
