import React, {useState, useEffect} from "react";
const getLocalStorage = () => {
  let token = localStorage.getItem('token');

  if (token) {
    return JSON.parse(localStorage.getItem('token'))
  } 
  else {
    return null;
  }
}
const getMbIdLocal = () => {
  let mbId = localStorage.getItem("mbId");

  if (mbId) {
    return JSON.parse(localStorage.getItem("mbId"))
  }
  else {
    return null;
  }
}
const adminLocal = () => {
  let admin = localStorage.getItem("admin");

  if (admin) {
    return JSON.parse(localStorage.getItem("admin"))
  }
  else {
    return null;
  }
}

const AuthContext = React.createContext({
  token: null,
  isLoggedIn: false,
  admin: false,
  isAdmin: () => {},
  login: (token) => {},
  logout: () => {},
  id: (id) => {},
  mbId: ""
});

export const AuthContextProvider = (props) => {

  const [token, setToken] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [id, setId] = useState("");

  const userIsLoggedIn = getLocalStorage("token");

  const loginHandler = (token) => {
      // setToken(token);
      localStorage.setItem('token', JSON.stringify(token))
  }
  const logoutHandler = () => {
    localStorage.setItem('token', null)
    localStorage.setItem("mbId", null)
    localStorage.setItem("admin", null)
    setToken(null);
    setAdmin(false);
    window.location.reload();
  }

  const adminHandler = (a) => {
    if (a === "messi") {
      localStorage.setItem("admin", JSON.stringify(true))
    }
    else {
      localStorage.setItem("admin", JSON.stringify(false))
    }
  }

  const idHandler = (id) => {
    localStorage.setItem("mbId", JSON.stringify(id))
  }

  const contextValue = {
    token: getLocalStorage(),
    isLoggedIn: userIsLoggedIn,
    admin: adminLocal(),
    isAdmin: adminHandler,
    login: loginHandler,
    logout: logoutHandler,
    id: idHandler,
    mbId: getMbIdLocal()
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;

