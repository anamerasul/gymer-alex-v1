// import logo from './logo.svg';
import { Route, Routes } from 'react-router';
import './App.css';
import DetailsService from './Pages/DetailsService/DetailsService';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Services/Services/Services';

import Header from './Pages/Shared/Header/Header';


function App() {



  return (
    <div className="">
      <Header></Header>

      <Routes>

        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/services" element={<Services></Services>}> </Route>

        <Route path="/services/:id" element={<DetailsService></DetailsService>}></Route>
      </Routes>



    </div>






  );
}



export default App;




