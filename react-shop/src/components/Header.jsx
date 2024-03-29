import React, { useState, useContext } from "react";
import Menu from '@components/Menu';
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";
import "@styles/Header.scss";
import iconmenu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoping_cart from "@icons/icon_shopping_cart.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const {state} = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src={iconmenu} alt="icono de menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="Logo de YardSale" className="nav-logo" />
        <ul>
          <li>
            <a href="">All</a>
          </li>
          <li>
            <a href="">Clothes</a>
          </li>
          <li>
            <a href="">Electrinics</a>
          </li>
          <li>
            <a href="">Furnitures</a>
          </li>
          <li>
            <a href="">Toys</a>
          </li>
          <li>
            <a href="">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            hi@example.com
          </li>
          <li className="navbar-shoping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
            <img src={shoping_cart} alt="" />
            {state.cart.length && state.cart.length  > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu/>}
      {toggleOrders && <MyOrder/>}
    </nav>
  );
};

export default Header;
