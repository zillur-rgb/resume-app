import "./App.css";
import AllPages from "../src/Pages/AllPages";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div
      style={{
        backgroundColor: "#fff",
      }}
    >
      <Navbar />
      <AllPages />
    </div>
  );
}

export default App;
