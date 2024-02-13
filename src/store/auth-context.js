import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogOut: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storefUserLoggedInInformation = localStorage.getItem("isLoggedIn");
        if (storefUserLoggedInInformation === "1") {
          setIsLoggedIn(true);
        }
      }, []);

    const logoutHandler = () => {
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        setIsLoggedIn(true);
    }

    return <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogOut:logoutHandler, onLogin: loginHandler}}>{props.children}</AuthContext.Provider>
}

export default AuthContext;