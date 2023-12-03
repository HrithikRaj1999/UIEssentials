import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import NavItems from "./NavItems";
import { buttonVariants } from "../ui/button";
import Cart from "../Cart";


const Navbar = () => {
  const user = null;
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-20 items-center">
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Image
                    src='/logo.png'
                    alt="Logo"
                    width={70}
                    height={70}
                    className="rounded-full p-1 z-50"
                  />
                </Link>
              </div>
              <div className="z-50 lg:ml-8 hidden  md:block lg:self-stretch">
                <NavItems />
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden md:flex md:flex-1 md:items-center md:justify-end sm:space-x-1 md:space-x-2">
                  {user ? null : (
                    <Link
                      href="/sign-in"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Sign In
                    </Link>
                  )}
                  <span className="h-5 w-px bg-gray-400" />
                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href="/sign-up"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Create Account
                    </Link>
                  )}
                  <span className="h-5 w-px bg-gray-400" />
                  <div className="ml-4 flow-root md:ml-6">
                    <Cart/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
