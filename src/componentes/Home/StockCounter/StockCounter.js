import '../StockCounter/StockCounter.scss'
import { useContext  } from 'react';
import { CartContext } from '../../../context/CartContext';
import { useParams } from "react-router-dom";


function StockCounter({stock}) {
    const {cartList,isInCart} = useContext(CartContext)
    const {id} = useParams()

const  stockInCart = isInCart(id) ? cartList.find((product) => product.id ==(id)).quantity : 0



    return( 
    <div className="StockCounter">
        {stock> 0 ?
        <p>Stock disponible: {stock-stockInCart}</p>
        :
        <p className="noStock">Sin stock</p>
        }

    </div>
    )
};
  
export default StockCounter;