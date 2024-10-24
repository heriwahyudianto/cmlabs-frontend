import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Category from "./pages/Category";
import CategoryDetail from "./pages/CategoryDetail";
import MealsDetail from "./pages/MealsDetail";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Category />} />
          <Route path=":category-detail" element={<CategoryDetail />} />
          <Route path="meals-detail" element={<MealsDetail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
