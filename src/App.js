import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<Main />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 ! There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>

      {/* <Header />
      <Main/> */}
    </div>
  );
}

export default App;
