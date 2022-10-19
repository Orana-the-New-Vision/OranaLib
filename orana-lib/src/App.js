import "./App.css";
import SimpleButton from "./components/SimpleButton";
import OutlineNeonButton from "./components/OutlineNeonButton";
function App() {
    return (
        <div className="App">
            {/* <SimpleButton handleClick={() => console.log("Clicked!")} /> */}
            <OutlineNeonButton handleClick={() => console.log("Clicked!")} />
        </div>
    );
}

export default App;
