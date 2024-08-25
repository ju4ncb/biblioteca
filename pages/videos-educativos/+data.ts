// https://vike.dev/data
export { data };
export type Data = Awaited<ReturnType<typeof data>>;

import fs from "fs";
import type { VideoEducativoTipo } from "../types.ts";
import type { PageContextServer } from "vike/types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = async (pageContext: PageContextServer) => {
  const filePath = "./data/videos-educativos.json";
  const contenidoArchivo = fs.readFileSync(filePath, "utf-8");
  const videosEducativosData: VideoEducativoTipo[] =
    JSON.parse(contenidoArchivo);
  return {
    videosEducativosData: videosEducativosData,
    // The page's <title>
    title: `Biblioteca`,
  };
};
