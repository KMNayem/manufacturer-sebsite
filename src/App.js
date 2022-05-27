
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



function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route
          path="/product/:productId"
          element={
            <RequireAuth>
              <OrderDetails/>
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
