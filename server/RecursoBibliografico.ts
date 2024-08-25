export default abstract class RecursoBibliografico {
  private codigo!: string;
  private titulo!: string;
  private estaDisponible!: boolean;

  constructor(codigo: string, titulo: string);
  constructor(codigo: string, titulo: string, estaDisponible: boolean);
  constructor(codigo: string, titulo: string, estaDisponible?: boolean) {
    this.setCodigo(codigo);
    this.setTitulo(titulo);
    this.setEstaDisponible(
      estaDisponible !== undefined ? estaDisponible : false
    );
  }

  //getter y setter

  public getCodigo() {
    return this.codigo;
  }

  public setCodigo(codigo: string) {
    this.codigo = codigo;
  }

  public getTitulo() {
    return this.titulo;
  }

  public setTitulo(titulo: string) {
    if (titulo.length > 30) {
      throw new Error("El título es muy largo.");
    }
    this.titulo = titulo;
  }

  public getEstaDisponible() {
    return this.estaDisponible;
  }

  public setEstaDisponible(estaDisponible: boolean) {
    this.estaDisponible = estaDisponible;
  }

  //metodos

  abstract prestar(): number;
}
