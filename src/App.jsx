import React, { useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import HomePage from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { useDispatch } from "react-redux";
import { fetchCategoriesAndDocuments } from "./redux/categories/categoriesSlice";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesAndDocuments())
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<HomePage/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  );
}

export default App;
