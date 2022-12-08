import { Link } from "react-router-dom";
import '../CheckButton/CheckButton.scss'

function CheckButton() {
    return( 
    <div className="CheckButton">
    <Link to="/cart"><button>Finalizar compra</button></Link>
    <Link to="/"><button>Seguir comprando</button></Link>
    </div>
    )
};
  
export default CheckButton;