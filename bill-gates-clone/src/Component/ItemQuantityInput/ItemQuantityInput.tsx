import InputContext from "../../Context/InputContext";
import "./ItemQuantityInput.style.css";
import { useContext } from "react";

function ItemQuantityInput() {
    let { input, setInput } = useContext(InputContext);

    const handleInput = (event) => {
        console.log(event.target.value);
        setInput((previousInput) => event.target.value);
    };

    return (
        <>
            <input
                onChange={handleInput}
                id="input"
                className="input"
                type="number"
            />
        </>
    );
}

export default ItemQuantityInput;
