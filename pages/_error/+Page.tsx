export { Page };

function Page() {
  return (
    <div className="error">
      <p>Esta página no existe</p>
      <a href="/libros">
        <button type="button">Ir al inicio</button>
      </a>
    </div>
  );
}
