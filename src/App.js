import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./components/Home";
import ContextState from "./Context/ContextState";

function App() {
  return (
    <ContextState >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ContextState>
  );
}

export default App;

