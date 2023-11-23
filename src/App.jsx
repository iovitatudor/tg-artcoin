import './App.scss';
import Header from "./components/Header";
import ServicesGet from "./components/ServicesGet";

const tg = window.Telegram.WebApp

function App() {
    return (
        <div className="App">
            <Header/>
            <ServicesGet/>
            <div>Header</div>
            <div>Content</div>
            <div>Footer</div>
        </div>
    );
}

export default App;
