// import logo from './logo.svg';
import { Route, Routes } from 'react-router';
import './App.css';
import DetailsService from './Pages/Services/DetailsService/DetailsService';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Services/Services/Services';

import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';


function App() {



  return (
    <div className="">
      <Header></Header>

      <Routes>

        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/services" element={<Services></Services>}> </Route>

        <Route path="/services/:id" element={<DetailsService></DetailsService>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>



    </div>






  );
}



export default App;




