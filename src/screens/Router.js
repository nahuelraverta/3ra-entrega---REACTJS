import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from '../componentes/Home/ItemListContainer/ItemListContainer';
import Home from './Home/Home';
import ItemDetailContainer from '../componentes/Home/ItemDetailContainer/ItemDetailContainer';
import Cart from '../componentes/Home/Cart/Cart';
import CartContextProvider from '../context/CartContext';


//Se utiliza el Context Provider en el Router para poder distribuir sus datos y funciones en toda la página
const Router = ()=>{
    return(
        <BrowserRouter>
        <CartContextProvider>
            <Home/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path="/category/:category" element={<ItemListContainer/>}></Route>
                <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
                <Route path="/category/:category/item/:id" element={<ItemDetailContainer/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="*" element={<ItemListContainer/>}></Route>
            </Routes>
        </CartContextProvider>        
        </BrowserRouter>
    )
};

export default Router