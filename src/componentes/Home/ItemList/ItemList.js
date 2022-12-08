import Item from "../Item/Item";
import "../ItemList/ItemList.scss"
import { Link } from "react-router-dom";


//Componente ItemList encargado de renderizar los items con sus props
function ItemList({productList}) {
    return( 
    <div className="ItemList">
        {productList.map((product,i)=>(
            <Link key={i} to={`item/${product.id}`}>
                <Item
                img={product.img}
                name={product.name}
                key={i}
                id={product.id}
                price={product.price}
                category={product.category}>

                </Item>
            </Link>))
        }
    </div>
    
  );
}
export default ItemList;