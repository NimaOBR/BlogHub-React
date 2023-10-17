import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        fontWeight="bold"
        bgcolor="#f7f7f7"
        color="primary"
        padding="10px"
        textAlign="center"
        mt={10}
      >
        تمام حقوق مادی و معنوی این سایت متعلق به بلاگ هاب می باشد و استفاده از
        مطالب با ذکر منبع بلامانع است. برنامه نویس : nimaobr@gmail.com
      </Typography>
    </footer>
  );
};

export default Footer;
