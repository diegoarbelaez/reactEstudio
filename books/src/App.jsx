import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Create from "./pages/Create";
import View from "./pages/View";
import Store from "./store/Store";

function App() {
  return (
    <>
      <Store> {/* PASO 6: (mirar pasos anteriores en Store.jsx) Envolver todo el App en el contexto que hemos creado*/}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="create" element={<Create/>}></Route>
            <Route path="view/:bookId" element={<View />}></Route>
          </Routes>
        </BrowserRouter>
      </Store>
    </>
  );
}

export default App;
