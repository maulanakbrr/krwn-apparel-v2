import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import HomePage from "./routes/home/home.component";
import SignInPage from "./routes/sign-in/sign-in.component";

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
        <Route path='sign-in' element={<SignInPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
