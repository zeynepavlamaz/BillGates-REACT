import MoneyContext from "../Context/MoneyContext";
import ReceiptContext from "./ReceiptContext";
import { useState } from "react";
import data from "../Data/Items";

function MainContextProvider({ children }) {
    const [currentMoney, setCurrentMoney] = useState(100000000000);
    const [newData, setNewData] = useState(data);

    const money = {
        currentMoney,
        setCurrentMoney,
        newData,
        setNewData
    };

    return (
        <MoneyContext.Provider value={money}>
            <ReceiptContext.Provider value={[]}>
                {children}
            </ReceiptContext.Provider>
        </MoneyContext.Provider>
    );
}

export default MainContextProvider;
