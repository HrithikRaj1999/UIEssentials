"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import React, { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useDivAutoCloseOnClick } from "@/hooks/useDivAutoCloseOnClick";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>();

  const navRef = useRef<HTMLDivElement | null>(null);

  useDivAutoCloseOnClick(navRef, () => setActiveIndex(null)); // when clicked outside of drop down it will automatically closess

  const handleOpen = (i: number) => {
    activeIndex === i
      ? setActiveIndex(null) //if again clicked on same button which is open close it manually
      : setActiveIndex(i); //set current open tab as active
  };

  const handler=(e:KeyboardEvent)=>{
    if(e.key==='Escape'){
      setActiveIndex(null)
    }
  }
  useEffect(() => {
    document.addEventListener("keydown",handler)
    return () => {
      document.removeEventListener("keydown",handler)
    }
  }, [])
  
  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, i) => (
        <NavItem
          category={category}
          handleOpen={handleOpen}
          isOpen={i === activeIndex} // if current active Index is same as current index element
          isAnyOpen={!activeIndex} //if no activeIndex then nothing is open else something is there
          index={i}
          key={i}
        />
      ))}
    </div>
  );
};

export default NavItems;
