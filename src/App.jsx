import Diagram from "./Routes/Diagram.jsx";
import { ToggleProvider } from "../src/Components/Hook/ToggleContext.jsx";
import "./App.css";

function App() {
  return (
    <>
      <ToggleProvider>
      <Diagram />
      </ToggleProvider>
    </>
  );
}

export default App;
