import React from "react";
import { useLocation } from "react-router";
import Navbar from "../Navigation/Navbar";
import NavbarSearch from "../Navigation/NavbarSearch";
import LibraryNav from "./LibraryNav";

const DefaultNav = ({ children, ...props }) => {
  let location = useLocation();

  const PlaylistRegex = new RegExp("^/library");
  const SearchRegex = new RegExp("^/search");

  let NewNavbar = Navbar;
  if (location.pathname.match(PlaylistRegex)) {
    NewNavbar = LibraryNav;
  } else if (location.pathname.match(SearchRegex)) {
    NewNavbar = NavbarSearch;
  }

  return <NewNavbar {...props}>{children}</NewNavbar>;
};

export default DefaultNav;
