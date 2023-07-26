"use client";

import "@/styles/Navbar.scss";
import Image from "next/image";
import logo from "@/assets/b_logo.png";
import { Monda } from "next/font/google";
import { useState } from "react";
import { Menu } from "@mui/icons-material";

const monda = Monda({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed bg-[#ffffff]">
      <nav className="px-[2%] flex justify-between items-center relative mt-[1em]">
        <div className="w-[30%] lg:w-[20%]">
          <Image src={logo} alt="bitnine logo" />
        </div>
        <Menu className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} />
        <div
          className={`${monda.className} link-container uppercase ${
            menuOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row items-center gap-[30px]`}
        >
          <p className="text-[#fac433]">Products</p>
          <p>Use cases</p>
          <p>Services</p>
          <p>Resources</p>
          <p>Blog</p>
          <p>Company</p>
          <p>ir</p>
          <p className="py-[4px] px-[8px] text-[#ffffff] bg-[#022EA9] rounded-[5px]">
            Try free
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
