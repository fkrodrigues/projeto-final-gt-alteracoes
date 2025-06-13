import FilterGroup from "./FilterGroup";

const FiltrarPor = ({arrayFilters}) => {


    return ( 
        <>
         <div className="text-[#474747] ">
            {arrayFilters.map((item, index) => (
                <FilterGroup key={index} inputType={item.inputType}  title={item.title} onChange={item.onChange}
                />
            ))}
          </div>
        </>
     );
}
 
export default FiltrarPor;