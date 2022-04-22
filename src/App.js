import "./App.css";
import AllPages from "../src/Pages/AllPages";
import Navbar from "./Components/Navbar/Navbar";
import { Container } from "@mui/material";
function App() {
  return (
    <div>
      <Navbar />
      <AllPages />
    </div>
  );
}

export default App;
