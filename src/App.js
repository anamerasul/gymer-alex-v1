// import logo from './logo.svg';
import { Route, Routes } from 'react-router';
import './App.css';
import DetailsService from './Pages/Services/DetailsService/DetailsService';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Services/Services/Services';

import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile';
import Logout from './Pages/LogOut/Logout';
import RequareAuth from './Components/RequareAuth/RequareAuth';
import NotFound from './Pages/NotFound/NotFound';


function App() {



  return (
    <div className="">
      <Header></Header>

      <Routes>

        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/services" element={
          <RequareAuth>
            <Services></Services>

          </RequareAuth>

        }> </Route>

        <Route path="/services/:id" element={

          <RequareAuth>
            <DetailsService></DetailsService>

          </RequareAuth>





        }></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/forgot" element={<ForgotPassword></ForgotPassword>}></Route>


        <Route path="/update" element={

          <RequareAuth>
            <UpdateProfile></UpdateProfile>
          </RequareAuth>

        }></Route>

        <Route path="/logout" element={
          <RequareAuth>
            <Logout></Logout>
          </RequareAuth>



        }></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>



    </div>






  );
}



export default App;




