import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Takoda from "./pages/Takoda";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
          <Route index element={<Home />} />
          <Route path="Takoda">
            <Route path=":number" element={<Takoda />} />
        
          </Route>
          <Route path="*" element={<NoPage />} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
