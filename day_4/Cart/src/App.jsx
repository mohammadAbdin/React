import { AppProvider } from "./MyContext";
import Navbar from "./Components/Navbar";
import "./App.css";
import Products from "./Components/Products";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Products />
    </AppProvider>
  );
}

export default App;
