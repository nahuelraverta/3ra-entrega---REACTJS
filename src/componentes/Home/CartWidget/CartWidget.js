import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext} from 'react';
import { CartContext } from '../../../context/CartContext';
import '../CartWidget/CartWidget.scss'
import { Link } from 'react-router-dom';


//Al detectar la existencia de productos en el carrito el cartWidget se renderiza
function CartWidget() {
  const {cartList,totalItems} = useContext(CartContext)

    return (
      <Link to="/cart">
      <div className="CartWidget">
        {cartList.length>0?
          <div>
          <FontAwesomeIcon className='fullCart' icon= {faCartShopping } size="lg"/>
          <p className='cartNumber'>{`${totalItems()}`}</p>
          </div>:
          <div><FontAwesomeIcon className='empty' icon= {faCartShopping } size="lg"/></div>
        }
      </div>
      </Link>
    );
  }

export default CartWidget
