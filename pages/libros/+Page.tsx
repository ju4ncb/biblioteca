import type { Data } from "./+data";
import { useState } from "react";
import { useData } from "../../renderer/useData";
import Libro from "../../server/Libro";
import Tabla from "../../components/Tabla";
import { LibroTipo } from "../types";

export { Page };

type librosProps = LibroTipo & {
  active: number;
};

function Page() {
  const { librosData } = useData<Data>();
  const [activeRow, setActiveRow] = useState({ active: -1 } as librosProps);
  const [printText, setPrintText] = useState(``);

  const prestar = () => {
    if (activeRow.active === -1) {
      alert("Escoge algúna opción de la tabla para prestar");
      return;
    } else if (!activeRow.estaDisponible) {
      alert("Recurso no disponible");
      return;
    }
    const libro = new Libro(
      activeRow.codigo,
      activeRow.titulo,
      activeRow.ISBN,
      activeRow.categoria,
      activeRow.estaDisponible
    );
    setPrintText(
      `Libro "${libro.getTitulo()}" prestado por ${libro.prestar()} días.`
    );
  };

  return (
    <>
      <section>
        <br />
        <Tabla prestar={prestar} type="libro">
          <thead>
            <tr>
              <th>Código</th>
              <th>ISBN</th>
              <th>Título</th>
              <th>Categoría</th>
              <th>Está disponible</th>
            </tr>
          </thead>
          <tbody>
            {librosData.map(
              ({ codigo, ISBN, titulo, categoria, estaDisponible }, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    setActiveRow({
                      codigo,
                      ISBN,
                      titulo,
                      categoria,
                      estaDisponible,
                      active: index,
                    });
                  }}
                  className={activeRow.active === index ? "active" : ""}
                >
                  <td>{codigo}</td>
                  <td>{ISBN}</td>
                  <td>{titulo}</td>
                  <td>{categoria}</td>
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
