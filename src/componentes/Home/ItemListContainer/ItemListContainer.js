import React, { cloneElement, useEffect, useState,CSSProperties } from 'react';
import '../ItemListContainer/ItemListContainer.scss'
import ItemList from '../ItemList/ItemList';
import{collection,getDocs,getFirestore,query,where} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import BounceLoader from "react-spinners/ClipLoader";

//Propiedades pertenecientes al spinner
const override = {
  display: "block",
  margin: "auto"
};

//Inicio componente ItemListContainer
const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);
    const {category} = useParams()
    const [loading,setLoading] = useState (true)
//A través de useParams se detecta si el usuario se encuentra en el home o ha seleccionado alguna categoría, renderizando en su caso los items correspondientes
    useEffect(() => {
      const db = getFirestore();
      const queryCollection = collection(db, 'ItemCollection');
      if(category) {
          const queryFilter = query(queryCollection, where('category', '==', category));
          getDocs(queryFilter)
          .then(res => setProductList(res.docs.map(product => ({id: product.id, ...product.data()}))))
          .then(res=>setLoading(false))
      } else {
          getDocs(queryCollection)
          .then(res => setProductList(res.docs.map(product => ({id: product.id, ...product.data(),}))))
          .then(res=>setLoading(false))
      }    
  }, [category]);
  
    return (
    <div className="itemListContainer">
      {loading?
            <BounceLoader color="#36d7b7"   size={88} cssOverride={override}/>
      :
      <>
            {category?<h2 className='categoryTitle'>{category.toLocaleUpperCase()}</h2>:<h2 className='categoryTitle'>ULTIMAS NOVEDADES</h2>}

      <ItemList productList={productList}/>
      </>
      }
    </div>
 

    );
  };
  
export default ItemListContainer;