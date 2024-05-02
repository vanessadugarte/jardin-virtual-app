import './app.css'
import Brand from "./components/brand/Brand.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.jsx";
import Layout from "./components/layout/Layout.jsx";


function App() {

    return (
        <Layout>
            <ItemListContainer greeting={"Saludo"}/>
        </Layout>
    );
}

export default App
