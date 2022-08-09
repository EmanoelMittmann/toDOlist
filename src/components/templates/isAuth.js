import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const IsAuth = ({ children }) => {

    const navigation = useNavigate()

  useEffect(() => {
    const validation = localStorage.getItem("login");

    if (!validation) {
      navigation("/");
    }
    else if(validation){
      navigation("/home")
    }

  }, []);

  return <>{children}</>;
};
