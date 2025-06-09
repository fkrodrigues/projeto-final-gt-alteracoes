import FiltrarCategoria from "./FiltrarCategoria";

const FiltrarPor = ({arrayFiltros}) => {


    return ( 
        <>
         <div>
            {arrayFiltros.map((item, index) => (

                <FiltrarCategoria key={index} arrayCategoria={item.array}  titulo={item.tituloCategoria} onChange={item.onChange}/>
            ))}
          </div>
        </>
     );
}
 
export default FiltrarPor;