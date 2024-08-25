import type { Data } from "./+data";
import { useState } from "react";
import { useData } from "../../renderer/useData";
import Tabla from "../../components/Tabla";
import { VideoEducativoTipo } from "../types";
import VideoEducativo from "../../server/VideoEducativo";

export { Page };

type videosProps = VideoEducativoTipo & {
  active: number;
};

function Page() {
  const { videosEducativosData } = useData<Data>();
  const [activeRow, setActiveRow] = useState({ active: -1 } as videosProps);
  const [printText, setPrintText] = useState(``);

  const getDuracion = (duracion: number) => {
    const segundos = duracion % 60;
    const minutos = Math.floor(duracion / 60);
    const horas = Math.floor(minutos / 60);

    return `${horas}:${minutos.toString().padStart(2, "0")}:${segundos
      .toString()
      .padStart(2, "0")}`;
  };

  const prestar = () => {
    if (activeRow.active === -1) {
      alert("Escoge algúna opción de la tabla para prestar");
      return;
    } else if (!activeRow.estaDisponible) {
      alert("Recurso no disponible");
      return;
    }
    const video = new VideoEducativo(
      activeRow.codigo,
      activeRow.titulo,
      activeRow.formato,
      activeRow.duracionSegundos,
      activeRow.añoCreacion,
      activeRow.estaDisponible
    );
    setPrintText(
      `Video educativo "${video.getTitulo()}" prestado por ${video.prestar()} días.`
    );
  };

  return (
    <>
      <section>
        <br />
        <Tabla prestar={prestar} type="video">
          <thead>
            <tr>
              <th>Código</th>
              <th>formato</th>
              <th>Título</th>
              <th>Duración</th>
              <th>Año creación</th>
              <th>Está disponible</th>
            </tr>
          </thead>
          <tbody>
            {videosEducativosData.map(
              (
                {
                  codigo,
                  formato,
                  titulo,
                  duracionSegundos,
                  añoCreacion,
                  estaDisponible,
                },
                index
              ) => (
                <tr
                  key={index}
                  onClick={() => {
                    setActiveRow({
                      codigo,
                      formato,
                      titulo,
                      duracionSegundos,
                      añoCreacion,
                      estaDisponible,
                      active: index,
                    });
                  }}
                  className={activeRow.active === index ? "active" : ""}
                >
                  <td>{codigo}</td>
                  <td>{formato}</td>
                  <td>{titulo}</td>
                  <td>{getDuracion(duracionSegundos)}</td>
                  <td>{añoCreacion}</td>
                  <td>{estaDisponible ? "Si" : "No"}</td>
                </tr>
              )
            )}
          </tbody>
        </Tabla>
        <p className="center" style={{ width: "max-content" }}>
          {printText}
        </p>
      </section>
    </>
  );
}
