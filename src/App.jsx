import './App.scss';
import Header from "./components/Header";
import ServicesGet from "./components/ServicesGet";
import ServicesProvide from "./components/ServicesProvide";

// const tg = window.Telegram.WebApp

function App() {
    return (
        <div className="App">
            <Header/>
            <ServicesGet/>
            <ServicesProvide/>
        </div>
    );
}

export default App;
