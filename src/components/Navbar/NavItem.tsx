"use-client";
import { NavItemPropsType } from "@/interface_types/NavBar";
import React from "react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const NavItem = ({
  category,
  handleOpen,
  isAnyOpen,
  isOpen,
  index,
}: NavItemPropsType) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-1.5"
          onClick={()=>handleOpen(index)}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category?.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>
      {isOpen ? (
        <div
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground animate-in fade-in-10 slide-in-from-top-36",
            
          )}
        >
          <div
            className="absolute inset-x-0 top-1/2 bg-white shadow"
            aria-hidden="true"
          >
            <div className="relative bg-white">
              <div className="mx-auto max-w-7xl px-8">
                <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-10">
                  <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                    {category.featured.map((item, i) => (
                      <div
                        key={i}
                        className="group relative text-base sm:text-sm"
                      >
                        <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-200 group-hover:shadow-xl">
                          <Image
                            src={item.imageSrc}
                            alt="product-category-img"
                            fill
                            className="object-cover object-center"
                          />
                          </div>
                          <Link
                            href={item.href}
                            className="mt-6 block font-medium text-gray-900"
                          >
                            {item.name}
                          </Link>
                          <p className="mt-1" aria-hidden="true">
                            Show Now{" "}
                          </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
