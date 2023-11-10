import Diagram from "./Routes/Diagram.jsx";
import { ToggleProvider } from "./Components/Context/ToggleContext.jsx";
import { CounterProvider } from "./Components/Context/CounterContext.jsx";
import "./App.css";

function App() {
  return (
    <>
      <ToggleProvider>
        <CounterProvider>
          <Diagram />
        </CounterProvider>
      </ToggleProvider>
    </>
  );
}

export default App;
