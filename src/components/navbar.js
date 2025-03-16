import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    <div className="navbar">
      <Link to="/">HOME</Link>
      <Link to="/create-recipe">CREATE RECIPIE</Link>
      <Link to="/saved-recipes">SAVED RECIPES</Link>
      
      {!cookies.access_token ? (
        <Link to="/auth">LOGIN/REGISTER</Link>
      ) : (
        <button onClick={logout}> LOGOUT</button>
      )}
      <Link to="/about">ABOUT</Link>
    </div>
  );
};
