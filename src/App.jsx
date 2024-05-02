import './App.css'
import Brand from "./components/Brand.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.jsx";


function App() {

    return (
        <div>
            <div className="header__wrapper">
                <Brand/>
                <NavBar/>
            </div>
            <ItemListContainer greeting={"Greeting itemlistcontainer"}/>
        </div>
                );
                }

                export default App
