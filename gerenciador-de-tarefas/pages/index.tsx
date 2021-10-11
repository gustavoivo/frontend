import type { NextPage } from 'next'
import { Login } from '../containers/Login';
import {useEffect, useState} from "react";
import {Home} from "../containers/Home";
import { Register } from '../containers/Register';

type Pages = "login" | "register" | "home";

const Index: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<Pages | undefined>(undefined);

  useEffect(() => {
    if(typeof window != "undefined") {
      const token  = localStorage.getItem("accessToken") as string;

      if(token) {
        setCurrentPage("home");
      } else {
        setCurrentPage("login");
      }
    }
  }, []);

  const Logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    setCurrentPage("login")
  }

  const Enter = (name: string, email: string, token: string) => {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);

    setCurrentPage("home")
  }

  const getCurrentPage = () => {
    switch (currentPage) {
      case "login": return <Login Enter={Enter} ClickRegister={() => setCurrentPage("register")} />;
      case "register": return <Register Back={() => setCurrentPage("login")} Register={Enter} />;
      case "home": return <Home Logout={Logout} />;
    }
  }

  return <>{getCurrentPage()}</>;
}


export default Index
