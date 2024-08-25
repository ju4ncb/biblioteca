import React from "react";

interface Props {
  children?: React.ReactNode;
  type: string;
  prestar(): void;
}

const Tabla = ({ children, type, prestar }: Props) => {
  return (
    <>
      <table className={`table table-${type} center`}>{children}</table>
      <button type="button" onClick={prestar} className="btn-prestar center">
        Prestar
      </button>
    </>
  );
};

export default Tabla;
