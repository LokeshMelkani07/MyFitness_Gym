import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/myfit.jpg";

const Footer = () => (
  <Box mt="80px" bgcolor="white" mb="10px">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "150px", height: "110px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Copyright @MyFitnessGym2022
    </Typography>
  </Box>
);

export default Footer;
