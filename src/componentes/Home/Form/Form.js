import '../Form/Form.scss'
import {addDoc,getFirestore,collection,writeBatch,doc,updateDoc,increment} from "firebase/firestore"
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../../context/CartContext'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export function Form(){

  const {cartList,totalAmount,removeList} = useContext(CartContext)
  const buyDate = new Date()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [emailCheck,setEmailCheck] = useState("")
  const [telephone,setTelephone] = useState("")
  
  
  /*Formulario de contacto, al ser completado envía la orden a Firestore y limpia el carrito*/
    const sendOrder=()=>{
    if(email == emailCheck && email != "" && name !="" && telephone != ""){
      const order = {
        buyer:{name:`${name}`,phone:`${telephone}`, email:`${email}`},
        buyList: {...cartList,date:`${buyDate}`, total:totalAmount()}
      };

      const db = getFirestore();
      const ordersCollection = collection(db, "ordersCollection");

      addDoc(ordersCollection, order)
      //Mensaje de compra realizada en forma satisfactoria
      .then(({id})=>Swal.fire({ title: 'Compra realizada con éxito',
      html: `El código de su orden es ${id}`,
      icon: 'success',
      confirmButtonText: 'Ok'}))
      //Vaciado de carrito
      .then(()=>removeList())
      ;

      /*Actualización de stock*/
      cartList.map(async (item) => {
        const itemRef = doc(db, "ItemCollection", item.id);
        await updateDoc(itemRef, {
        stock: increment(-item.quantity)
        });

      })

    }
    else{
      alert("Ingrese sus datos correctamente")//Mensaje en caso de que el formulario no sea completado correctamente
    }
    }

    const prevForm=(e)=> e.preventDefault()

    return(
        <div>
            <h2>Datos del comprador</h2>
            <div className='form'>
            <input type={'text'} placeholder={"Nombre y Apellido"} name="name" value={name} onChange={e=>setName(e.target.value)}></input>
            <input type={'email'} placeholder={"E-mail"} name="email" value={email} onChange={e=>setEmail(e.target.value)}></input>
            <input type={'email'} placeholder={"Confirme su e-mail"} name="emailCheck" value={emailCheck} onChange={e=>setEmailCheck(e.target.value)}></input>
            <input type={'number'} placeholder={"Teléfono"} name="telephone" value={telephone} onChange={e=>setTelephone(e.target.value)}></input>
            <button onClick={()=>sendOrder()}>Comprar</button>
            </div>

        </div>

    )
}

