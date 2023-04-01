import React from "react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <nav>
      <img src="../../public/icons/icon_menu.svg" alt="icono de menu" className="menu" />
      <div className="navbar-left">
        <img
          src="../../public/logos/logo_yard_sale.svg"
          alt="Logo de YardSale"
          className="logo"
        />
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
          <li className="navbar-email">hi@example.com</li>
          <li className="navbar-shoping-cart">
            <img src="../../public/icons/icon_shopping_cart.svg" alt="" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
