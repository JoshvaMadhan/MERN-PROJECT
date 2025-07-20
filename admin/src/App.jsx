import React from "react";
import { Routes, Route } from "react-router-dom";  
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Add from "./pages/Add/Add.jsx";
import List from "./pages/List/List.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const Home = () => <h1></h1>;

const App = () => {

  return (
    <div >
      <ToastContainer />
      <Navbar />
       <div className="app-content">
        <Sidebar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List />} />
        <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
      </div>
  );
};

export default App;
