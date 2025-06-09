import Checkbox from "./Checkbox";

const FiltrarCategoria = ({arrayCategoria, titulo}) => {
    return ( 
        <>
          <div>
            <h4>{titulo}</h4>
            {arrayCategoria.map((item, index) => (
                <Checkbox key={index} checked={item.checked} radio={item.radio} text={item.text} onChange={item.onChange}/>
            ))}
          </div>
        </>
     );
}
 
export default FiltrarCategoria;