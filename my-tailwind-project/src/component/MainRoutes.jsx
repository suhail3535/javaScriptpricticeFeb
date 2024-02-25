import { Route, Routes } from "react-router-dom";
import SingleProduct from "./reusableCard/Single";
import Item from "./items/Item";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/item" element={<Item />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
