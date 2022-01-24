import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
