import MoneyContext from "../../Context/MoneyContext";
import "./Receipt.style.css";
import { useContext } from "react";

function Receipt() {
    const { newData } = useContext(MoneyContext);

    return (
        <>
            {newData.filter((obj) => obj.bought !== 0).length > 0 ? (
                <h2>YOUR RECEIPT</h2>
            ) : (
                ""
            )}
            
                {newData
                    .filter((obj) => obj.bought !== 0)
                    .map((item) => {
                        return (
                            
                                <div className="item-information">
                                    <div>{item.name}</div>

                                    <div>x{item.bought}</div>
                                    <div>${item.price}</div>
                                </div>
                            
                        );
                    })}
           
            {newData.filter((obj) => obj.bought !== 0).length > 0 ? (
                <div className="total-price">
                    <span>TOTAL</span>{" "}
                    <span>
                        $
                        {newData
                            .filter((obj) => obj.bought !== 0)
                            .map((obj) => obj.price * obj.bought)
                            .reduce((acc, curr) => acc + curr, 0)}
                    </span>
                </div>
            ) : (
                ""
            )}
        </>
    );
}

export default Receipt;
