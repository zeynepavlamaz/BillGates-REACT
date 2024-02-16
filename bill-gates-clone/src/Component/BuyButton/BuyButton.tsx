import "./BuyButton.style.css";
import data from "../../Data/Items";
import { useContext } from "react";
import MoneyContext from "../../Context/MoneyContext";
import InputContext from "../../Context/InputContext";

interface Prop {
    itemId: string;
}

function BuyButton(prop: Prop) {
    const { currentMoney, setCurrentMoney, newData, setNewData } = useContext(MoneyContext);
    const { input, setInput } = useContext(InputContext);

    const getItem = () => {
        return newData.find((obj) => obj.id === prop.itemId);
    };

    const buy = () => {
        if (input <= 0 || input === null) return;

        if (getItem().price * Number(input) > currentMoney) return;

        setCurrentMoney(prevMoney => prevMoney - getItem().price * Number(input));

        const updateData = [...newData];
        const newIndex = newData.indexOf(getItem());

        updateData[newIndex].bought += Number(input);

        setNewData(updateData);

        console.log(getItem());
    };

    return (
        <>
            <button onClick={buy}>Buy</button>
        </>
    );
}

export default BuyButton;
