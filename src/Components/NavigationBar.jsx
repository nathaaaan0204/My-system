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
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to="/">
        <Button variant="text" className="text-black">
          Home
        </Button>
      </Link>
      <Link to="/AboutUs">
        <Button variant="text" className="text-black">
          About Us
        </Button>
      </Link>
      <Link to="/Gallery">
        <Button variant="text" className="text-black">
          Gallery
        </Button>
      </Link>
    </ul>
  );

  return (
    <Navbar className="fixed z-50 backdrop-saturate-0 backdrop-blur-none bg-opacity-100 mx-auto border-none  rounded-none max-w-full py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-black">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div>
            <Button className="bg-green text-white py-3 px-7">Post an Article</Button>
        <Button variant="text" className="text-black" onClick={handleLogout}>
          Log out
        </Button>
        </div>
      
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {/* ... your existing hamburger icon code ... */}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button className="bg-white" onClick={handleLogout}>
            <span>Log out</span>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
};
