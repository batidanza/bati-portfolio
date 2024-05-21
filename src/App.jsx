import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import "./App.css";
import AppRoutes from "./routes/Routes";
import { UserProvider } from "./components/user/context/UserContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      console.log("isLoggedIn set to true");
    }
  }, []);

  return (
    <UserProvider>
      <Router>
        <div>
          <Navbar isLoggedIn={isLoggedIn} />
          <div className="content">
            <AppRoutes isLoggedIn={isLoggedIn} />
          </div>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
