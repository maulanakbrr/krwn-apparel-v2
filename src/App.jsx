import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import HomePage from "./routes/home/home.component";

const Shop = () => {
  return (
    <div>
      This is the shop page
    </div>
  )
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<HomePage/>}/>
        <Route path='shop' element={<Shop/>}/>
      </Route>
    </Routes>
  );
}

export default App;
