export type RecursoBibliograficoTipo = {
  codigo: string;
  titulo: string;
  estaDisponible: boolean;
};

export type LibroTipo = RecursoBibliograficoTipo & {
  ISBN: string;
  categoria: string;
};

export type RevistaTipo = RecursoBibliograficoTipo & {
  ISSN: string;
  numeroVolumen: string;
  fechaPublicacion: string;
  periodicidad: string;
};

export type VideoEducativoTipo = RecursoBibliograficoTipo & {
  formato: string;
  duracionSegundos: number;
  añoCreacion: number;
};
