import { Button } from 'primereact/button';

const ItemColecao = ({ titulo, imagem,desconto}) => {
    return ( 
        <div>
            
            <div className="
              w-[405] h-[251px] relative
            ">
                <div className='
                    absolute
                    bg-[#E7FF86]
                    rounded-[29px]
                    w-[96px] h-[32px]
                    top-[35px] left-[30px]
                    text-[14px] font-[700]
                    text-[#474747]
                    flex justify-center items-center
                '>{desconto}</div>
                <div className='
                    absolute
                    bottom-[40%]
                    left-[30px]
                    text-black
                    font-bold text-[32px]
                    w-[190px]
                    leading-[36px]
                '>{titulo}</div>
                <div className='
                      absolute
                      bottom-[30px]
                      left-[30px]           
                    '>
                    <Button label="Comprar"
                    className="
                        bg-[#F5F5F5] text-[#db2777]
                        p-2.5 rounded-[8px]
                        w-[153px] h-[48px] text-[.9rem]
                        tracking-[1px]
                        hover:bg-[#ffffff]
                    "
                    />
                </div>
                <div className='gap-[50px]'>
                    <img className=' rounded-[10px]' src={imagem} alt={imagem} />
                </div>
            </div>
        </div>
     );
}
 
export default ItemColecao;