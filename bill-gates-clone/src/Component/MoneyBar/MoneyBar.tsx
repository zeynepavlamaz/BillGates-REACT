import { useContext } from 'react';
import './MoneyBar.style.css'
import MoneyContext from '../../Context/MoneyContext';



function MoneyBar() {
    const { currentMoney, setCurrentMoney } = useContext(MoneyContext);


    return (
        <>
    
            <div className="money-bar-container">
                <h2>$<span>{currentMoney}</span></h2>
            </div>
        </>
    );
}

export default MoneyBar;