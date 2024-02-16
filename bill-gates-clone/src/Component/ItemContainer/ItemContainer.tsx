import "./ItemContainer.style.css";
import data from '../../Data/Items'
import Item from "../Item/Item";


function ItemContainer() {
    return <div className="item-container">
        {data.map(item => {
            return (<Item key={item.id} id={item.id} img={item.img} name={item.name} price={item.price} ></Item>)
        })}
    </div>;
}

export default ItemContainer;
