import "./spinner.css";

const Spinner = ()=> {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Carregando conteúdo...</p>
    </div>
  );
}
export default Spinner;