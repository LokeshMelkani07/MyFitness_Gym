import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/gymLogo.png";

// The Stack component manages layout of immediate children along the vertical or horizontal axis with optional spacing and/or dividers between each child.
// When we need items in horixontal or vertical allignment we use Stack of material UI

function Navbar() {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          gap: { sm: "123px", xs: "40px" },
          mt: { sm: "32px", xs: "20px" },
          justifyContent: "none",
        }}
        px="20px"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "88px", height: "48px", margin: "0 20px" }}
          />
        </Link>
        <Stack
          direction="row"
          gap="40px"
          fontFamily="Alegreya"
          fontSize="24px"
          alignItems="flex-end"
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#3A1212",
              borderBottom: "3px solid #FF2625",
            }}
          >
            Home
          </Link>
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "#3A1212" }}
          >
            Exercises
          </a>
        </Stack>
      </Stack>
    </>
  );
}

export default Navbar;
