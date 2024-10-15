"use client";
import Image from "next/image";
import Logo from "../../../public/assets/Logo.png";
import "./Header.css";
import { FiSearch, FiHeart, FiShoppingBag, FiUser, FiMenu } from 'react-icons/fi';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="headerContainer">
      <div className="header">
        <div className="menuIconContainer" onClick={toggleMenu}>
          <FiMenu className="menuIcon" />
        </div>

        <div className="logoContainer">
          <Image className="logo" src={Logo} alt="Logo" />
        </div>

        <div className="logoText">LOGO</div>

        <div className="headerActions">
          <div className="iconContainer"><FiSearch /> </div>
          <div className="iconContainer"><FiHeart /> </div>
          <div className="iconContainer"><FiShoppingBag /> </div>
          {/* Hide the profile icon on smaller screens */}
          <div className="iconContainer profileIcon"><FiUser /> </div>
        </div>
      </div>

      {menuOpen && (
        <div className="tabs">
          <div className="tabItem">SHOP</div>
          <div className="tabItem">SKILLS</div>
          <div className="tabItem">STORIES</div>
          <div className="tabItem">ABOUT</div>
          <div className="tabItem">CONTACT US</div>
        </div>
      )}

      <div className="mobileTabs">
        <div className="tabItem">HOME</div>
        <div className="separator">|</div>
        <div className="tabItem">SHOP</div>
      </div>
    </div>
  );
}
