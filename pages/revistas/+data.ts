// https://vike.dev/data
export { data };
export type Data = Awaited<ReturnType<typeof data>>;

import fs from "fs";
import type { RevistaTipo } from "../types.ts";
import type { PageContextServer } from "vike/types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = async (pageContext: PageContextServer) => {
  const filePath = "./data/revistas.json";
  const contenidoArchivo = fs.readFileSync(filePath, "utf-8");
  const revistasData: RevistaTipo[] = JSON.parse(contenidoArchivo);
  return {
    revistasData: revistasData,
    // The page's <title>
    title: `Biblioteca`,
  };
};
