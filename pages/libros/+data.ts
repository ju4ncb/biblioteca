// https://vike.dev/data
export { data };
export type Data = Awaited<ReturnType<typeof data>>;

import fs from "fs";
import type { LibroTipo } from "../types.ts";
import type { PageContextServer } from "vike/types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = async (pageContext: PageContextServer) => {
  const filePath = "./data/libros.json";
  const contenidoArchivo = fs.readFileSync(filePath, "utf-8");
  const librosData: LibroTipo[] = JSON.parse(contenidoArchivo);
  return {
    librosData: librosData,
    // The page's <title>
    title: `Biblioteca`,
  };
};
