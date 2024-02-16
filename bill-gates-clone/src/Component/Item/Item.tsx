import "./Item.style.css";
import SellButton from "../SellButton/SellButton";
import ItemQuantityInput from "../ItemQuantityInput/ItemQuantityInput";
import BuyButton from "../BuyButton/BuyButton";
import ItemLevelContextProvider from "../../Context/ItemLevelContextProvider";

interface Prop {
    id: string;
    img: string;
    name: string;
    price: number;
}

function Item(prop: Prop) {
    return (
        <div className="container">
            <div className="item-description">
                <div>
                    <img src={prop.img} alt={prop.name} />
                </div>
                <h2>{prop.name}</h2>
                <h4>${prop.price}</h4>
            </div>

            <ItemLevelContextProvider>
                <div className="buy-sell">
                    <SellButton itemId={prop.id}></SellButton>
                    <ItemQuantityInput></ItemQuantityInput>
                    <BuyButton itemId={prop.id}></BuyButton>
                </div>
            </ItemLevelContextProvider>
        </div>
    );
}

export default Item;
