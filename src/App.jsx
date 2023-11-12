import Diagram from "./Routes/Diagram.jsx";
import { ToggleProvider } from "./Components/Context/ToggleContext.jsx";
import { CounterProvider } from "./Components/Context/CounterContext.jsx";
import { ProductProvider } from "./Components/Context/ProductContext.jsx";
import "./App.css";

function App() {
  return (
    <>
      <ToggleProvider>
        <ProductProvider>
          <CounterProvider>
            <Diagram />
          </CounterProvider>
        </ProductProvider>
      </ToggleProvider>
    </>
  );
}

export default App;
