import "./App.css";
import ItemContainer from "./Component/ItemContainer/ItemContainer.tsx";
import MoneyBar from "./Component/MoneyBar/MoneyBar.tsx";
import Profile from "./Component/Profile/Profile.tsx";
import Receipt from "./Component/Receipt/Receipt.tsx";
import MainContextProvider from "./Context/MainContextProvider.tsx";

function App() {
    return (
        <>
            <MainContextProvider>
                <div className="app-container">
                    <Profile></Profile>
                    <MoneyBar></MoneyBar>
                    <ItemContainer></ItemContainer>
                    <Receipt></Receipt>
                </div>
            </MainContextProvider>
        </>
    );
}

export default App;
