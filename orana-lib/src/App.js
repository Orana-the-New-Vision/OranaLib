import "./App.css";
import SimpleButton from "./components/SimpleButton";
import OutlineNeonButton from "./components/OutlineNeonButton";

function App() {
    return (
        <div className="App">
            {/* <SimpleButton /> */}
            {/* <OutlineNeonButton /> */}
            <OutlineNeonButton neonColor="#ff7100" buttonTxt="OFF" />
        </div>
    );
}

export default App;
