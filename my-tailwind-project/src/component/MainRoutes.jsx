import { Route, Routes } from "react-router-dom";
import SingleProduct from "./reusableCard/Single";

const MainRoutes = () => {
  return (
    <div>
      <Routes>


        <Route path="/product/:id" element={<SingleProduct />} />

      </Routes>
    </div>
  );
};

export default MainRoutes;
