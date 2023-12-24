import React from 'react';
import ReactDOM from 'react-dom/client';

import { Registration } from './components/registration.jsx';
import { Login } from './components/login.jsx';
import { Categories } from './components/categories.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Products} from "./components/products.jsx";

ReactDOM.createRoot(document.getElementById('app')).render(
   <React.StrictMode>
       <BrowserRouter>
           <Routes>
               <Route path="login" element={<Login />}/>
               <Route path="registration" element={<Registration />} />
               <Route path="categories" element={<Categories />} />
               <Route path={"categories/:categoryId"} element={<Products />} />

                   {/*<Route path="registration" element={<Registration />} />*/}
           </Routes>
       </BrowserRouter>
   </React.StrictMode>
);
