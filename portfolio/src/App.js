import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Update from "./pages/Update";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
          <Route index element={<Home />} />
          <Route path="update" element={<Update />}/>

          <Route path="*" element={<NoPage />} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
