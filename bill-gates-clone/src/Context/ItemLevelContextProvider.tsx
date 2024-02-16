import InputContext from "./InputContext";
import { useState } from "react"

function MainContextProvider({ children }) { 
    const [input, setInput] = useState(0);

    const data = {
        input,
        setInput
    }

    return (
        <InputContext.Provider value={data}>
            {children}
        </InputContext.Provider>
       
    )
}

export default MainContextProvider;