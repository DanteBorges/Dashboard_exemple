import React from "react";
import { Routes, Route } from "react-router-dom";
import Usuarios from "./Pages/Usuarios/Index";
import Dashboard from "./Pages/Dashboard/Index";
import Lotes from "./Pages/Lotes/Index";
import Slidebar from "./Pages/Slidebar/Index";
import "./assets/styles/index.css";
import CreateUser from "./Components/CreateUser";
import UpdateUser from "./Components/UpdateUser";





function App() {
  return (
    <div>
      <Slidebar />
      <Routes>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="lotes" element={<Lotes />}></Route>
        <Route path="usuarios" element={<Usuarios />}></Route>
        <Route path='/create' element={<CreateUser/>} />
        <Route path='/update/:id' element={<UpdateUser />}/>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export const NotFound = () => {
  return <div>This is a 404 page</div>;
};

export default App;
