import "./Item.scss";


//Componente Item con sus props
const Item = ({name,description,img,price,category,id,stock}) => {
  return (
    <div className="Item"> 
     <div className="ImgContainer"><img src={img} /></div> 
      <div className="description-container">
        <h3>{name}</h3>
        <h2>{description}</h2>
        <p>{`$ ${price}`}</p>
      </div>
      </div>
  );
};

export default Item;