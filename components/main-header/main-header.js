import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import style from "./header.module.css";
import Image from "next/image";
import HeaderBackground from "./header-background";
import NavLink from "./nav-link";

const MealHeader = () => {
  
  return (
    <>
      <HeaderBackground />
      <header className={style.header}>
        <Link href="/" className={style.logo}>
          <Image src={logoImg} alt="logo" />
          Food Studio
        </Link>
        <nav className={style.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              {" "}
              <NavLink href="/community"> Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MealHeader;
