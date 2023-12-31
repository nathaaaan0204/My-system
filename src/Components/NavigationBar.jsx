import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerIcon } from "./CustomSvg";

export const NavigationBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear the session or user authentication (you may use cookies, localStorage, or a state management solution)
    // For this example, I'll just clear the session storage
    sessionStorage.removeItem("user"); // Adjust this according to your authentication method

    // Redirect to the login page
    navigate("/");
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-5 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-24">
      <Link
        to="/"
        className="text-black font-bold uppercase text-[14px] hover:text-green"
      >
        Home
      </Link>
      <Link
        to="/AboutUs"
        className="text-black font-bold uppercase text-[14px] hover:text-green"
      >
        About Us
      </Link>
      <Link
        to="/Gallery"
        className="text-black font-bold uppercase text-[14px] hover:text-green"
      >
        Gallery
      </Link>
    </ul>
  );

  return (
    <Navbar className="fixed z-50 backdrop-saturate-0 backdrop-blur-none bg-opacity-100 mx-auto border-none rounded-none max-w-full py-2 px-4 lg:px-8 lg:py-4 xl:py-0">
      <div className="xl:container px-4 py-4 mx-auto flex items-center justify-between text-black">
        <img className="h-8 xl:h-12" src="/images/logo.png" />
        <div className="hidden lg:block">{navList}</div>
        <div>
          <Button className="hidden lg:inline-block bg-green text-white py-3 px-7">
            Post an Article
          </Button>
          <Button
            variant="text"
            className="text-black hidden lg:inline-block"
            onClick={handleLogout}
          >
            Log out
          </Button>
        </div>

        <IconButton
          variant="text"
          className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {<HamburgerIcon />}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="text-end">
          {navList}
          <Button className="bg-green" onClick={handleLogout}>
            <span>Log out</span>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
};
