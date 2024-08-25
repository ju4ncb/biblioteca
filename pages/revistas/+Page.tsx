import type { Data } from "./+data";
import { useState } from "react";
import { useData } from "../../renderer/useData";
import { RevistaTipo } from "../types";
import Revista from "../../server/Revista";
import Tabla from "../../components/Tabla";

export { Page };

type revistasProps = RevistaTipo & {
  active: number;
};

function Page() {
  const { revistasData } = useData<Data>();
  const [activeRow, setActiveRow] = useState({ active: -1 } as revistasProps);
  const [printText, setPrintText] = useState(``);

  const prestar = () => {
    if (activeRow.active === -1) {
      alert("Escoge algúna opción de la tabla para prestar");
      return;
    } else if (!activeRow.estaDisponible) {
      alert("Recurso no disponible");
      return;
    }
    const revista = new Revista(
      activeRow.codigo,
      activeRow.titulo,
      activeRow.ISSN,
      activeRow.numeroVolumen,
      activeRow.fechaPublicacion,
      activeRow.periodicidad,
      activeRow.estaDisponible
    );
    setPrintText(
      `Revista "${revista.getTitulo()}" prestada por ${revista.prestar()} días.`
    );
  };

  return (
    <>
      <section>
        <br />
        <Tabla prestar={prestar} type="revista">
          <thead>
            <tr>
              <th>Código</th>
              <th>ISSN</th>
              <th>Título</th>
              <th>Número de volumen</th>
              <th>Fecha de publicación</th>
              <th>Periodicidad</th>
              <th>Está disponible</th>
            </tr>
          </thead>
          <tbody>
            {revistasData.map(
              (
                {
                  codigo,
                  ISSN,
                  titulo,
                  numeroVolumen,
                  fechaPublicacion,
                  periodicidad,
                  estaDisponible,
                },
                index
              ) => (
                <tr
                  key={index}
                  onClick={() => {
                    setActiveRow({
                      codigo,
                      ISSN,
                      titulo,
                      numeroVolumen,
                      fechaPublicacion,
                      periodicidad,
                      estaDisponible,
                      active: index,
                    });
                  }}
                  className={activeRow.active === index ? "active" : ""}
                >
                  <td>{codigo}</td>
                  <td>{ISSN}</td>
                  <td>{titulo}</td>
                  <td>{numeroVolumen}</td>
                  <td>{fechaPublicacion}</td>
                  <td>{periodicidad}</td>
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
