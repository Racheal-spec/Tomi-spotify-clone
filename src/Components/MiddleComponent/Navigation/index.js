import React from "react";
import { useLocation } from "react-router";
import { HOMEPAGE, PLAYLIST, SEARCH } from "../../../Helpers/Routes";
import Navbar from "../Navigation/Navbar";
import NavbarSearch from "../Navigation/NavbarSearch";
import LibraryNav from "./LibraryNav";

const DefaultNav = ({ children, ...props }) => {
  let location = useLocation();
  console.log(location);

  let NewNavbar = Navbar;
  if (location.pathname.match(PLAYLIST)) {
    NewNavbar = LibraryNav;
  } else if (location.pathname.match(SEARCH)) {
    NewNavbar = NavbarSearch;
  }

  return <NewNavbar {...props}>{children}</NewNavbar>;
};

export default DefaultNav;
