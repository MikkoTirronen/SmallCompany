import React, { createContext, useState } from "react";

import { Route, Routes } from "react-router-dom";
import CreateCustomerPage from "./pages/CreateCustomerPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import "bootstrap/dist/css/bootstrap.css"
import CreateAccountPage from "./pages/CreateAccountPage";
import ActivateAccountPage from "./pages/ActivateAccountPage";



const CustomerList = createContext([]);
const LoggedInUser = createContext([]);

function App() {
  const [customerList, setCustomerList] = useState(null);
  const [currentUser, setCurrentUser] = useState("");
  return (
    <div className="container-fluid p-0">
      <CustomerList.Provider value={{ customerList, setCustomerList }}>
        <LoggedInUser.Provider value={{ currentUser, setCurrentUser }}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<ActivateAccountPage/>} />
            <Route path="/create/account" element={<CreateAccountPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/create/customer" element={<CreateCustomerPage />} />
            <Route path="/:id" element={<CustomerDetailPage />} />
          </Routes>
        </LoggedInUser.Provider>
      </CustomerList.Provider>
    </div>
  );
}
export { CustomerList, LoggedInUser };
export default App;
