import { useState,useEffect,useContext} from 'react';
import '../ItemCount/ItemCount.scss'
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import { useParams } from 'react-router-dom';


/*El componente ItemCount se encarga de determinar la cantidad deseada por el usuario, para lo cual
realiza una validación de stock*/
function ItemCount({stock,initial,getData,getItemCountLive}) {
    const [count, setCount] = useState(0);
    const {cartList, isInCart} = useContext(CartContext)
    const {id} = useParams();
   
//El contador inicia en 0
    useEffect(() => {
        {initial ? setCount(initial) : setCount(0)}},[])

//La función clickCount se encarga de incrementar en uno el contador
    function clickCount (){
        if(!isInCart(id) && count <stock){
            setCount(count+1)
            getItemCountLive(count  )
            
        }

// En caso de que el producto ya se encuentre en el carrito y el usuario haya deseado comprar más se checkea el stock y se continua la adición.        
        else{
            const cartCount = cartList.find((product) => product.id == parseInt(id)).quantity
            if(stock-cartCount-count>0 ){
                setCount(count+1)
                getItemCountLive(count)      
            }
        }
    }

// La función clickRest se encarga de restar en uno el contador
    function clickRest(){
        if(count>0){
            setCount(count-1)
        }
    }


    return( 
    <div className="ItemCount">
        <div className='ItemCountContainer'>       
            <button className="CountButton" onClick={()=> clickRest()}>
                -
            </button>
            <div className="contador" id="contador">
                {count}
            </div>

            <button className="CountButton" onClick={()=>clickCount()}>
                +
            </button> 
        </div>
        <div>
            <Link onClick={()=>getData(count)}><button onClick={()=>setCount(0) } className='BuyButton'> Agregar al carrito</button></Link>
        </div>        
    </div>
    )
};
  
export default ItemCount;
