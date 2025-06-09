
const Checkbox = ({checked, radio, text, onChange}) => {

  return (
    <div>
         <label>
        <input 
          type={radio ? "radio" : "checkbox"} 
          checked={checked} 
          onChange={onChange}
        />
        {text}
      </label>
        
    </div>
  );
}
 
export default Checkbox ;
