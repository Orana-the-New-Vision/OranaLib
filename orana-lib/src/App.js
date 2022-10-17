import logo from "./logo.svg";
import "./App.css";
import SimpleButton from "./components/SimpleButton";

function App() {
    return (
        <div className="App">
            <SimpleButton handleClick={() => console.log("Clicked!")} />
        </div>
    );
}

export default App;
