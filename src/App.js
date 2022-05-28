
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import OrderDetails from './Pages/OrderDetails/OrderDetails';
import RequireAuth from './Pages/Auth/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrder from './Pages/MyOrder/MyOrder';
import AllUsers from './Pages/Users/AllUsers';
import RequireAdmin from './Pages/Auth/RequireAdmin/RequireAdmin';
import AddTools from './Pages/AddTools/AddTools';
import Payment from './Pages/Payment/Payment';
import Profile from './Pages/Profile/Profile';



function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />
        
        <Route
          path="/product/:productId"
          element={
            <RequireAuth>
              <OrderDetails/>
            </RequireAuth>
          }
        ></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <DashBoard/>
          </RequireAuth>
        }>
          <Route path="payment/:id" element={<Payment/>} />
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='users' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path='addTools' element={<RequireAdmin><AddTools></AddTools></RequireAdmin>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
