import { useContext, useEffect} from 'react';
import { CartContext } from '../../../context/CartContext';
import '../Cart/Cart.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {Form} from '../Form/Form'


/*Renderizado de productos del cart + formulario*/

function Cart(){
    const {cartList,deleteItem,totalAmount} = useContext(CartContext)
    
    return(
        <div>
            {cartList.length > 0 ?
            
            <div className='cartListContainer'>
                <table className='cartList'>
                <h2>Sus productos seleccionados</h2>
                    <thead>
                        <tr className="cartTitles">
                            <td className='itemProp'>Imagen</td>             
                            <td className='itemProp'>Producto</td>
                            <td className='itemProp'>Cantidad</td>
                            <td className='itemProp'>Precio</td>
                            <td className='itemProp'>Subtotal</td>
                            <td></td>   
                        </tr>
                    </thead>
                    <tbody id="tbody">
                    {cartList.map((product,i)=>
                <tr key={i} className="cartItem">
                <td className='itemProp'><img src={`${product.img}`}/></td>
                <td className='itemProp'>{`${product.name}`}</td>
                <td className='itemProp'>{`${product.quantity}`}</td>
                <td className='itemProp'>${`${product.price}`}</td>
                <td className='itemProp'>${`${product.subtotal}`}</td>
                <FontAwesomeIcon className='trash' icon= {faTrash } size="lg" onClick={()=>deleteItem(product.id)}/>             
                </tr>
            
            )}
                    </tbody>
                    <p className='cartTotal'>Su total es $ {`${totalAmount()}`}</p>
                </table>

                <Form/>
            </div>
            


        :
            <div className='emptyCart'>
                <p>Carrito vacío</p>
                <Link to="/"><button>Seguir comprando</button></Link>
            </div>
        }
            
        </div>

        

       )
}

export default Cart