import { Route, Routes } from "react-router-dom";
import SingleProduct from "./reusableCard/Single";
import Item from "./items/Item";
import Navbar from "./navbar/Navbar";

const MainRoutes = () => {
  return (
    <div>
      <Routes>

        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
