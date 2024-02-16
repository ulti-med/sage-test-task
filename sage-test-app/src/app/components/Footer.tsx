import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Container, Divider, Grid, Link, Typography } from "@mui/material";
import React from "react";

const social = [
  {
    name: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/",
  },
  {
    name: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/",
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/",
  },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#161C2D",
        color: "white",
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent={"space-around"}
          sx={{ paddingY: 5 }}
        >
          <Grid item xs={12} sm={2}>
            <Typography variant="body1" color="grey" sx={{ pb: 2 }}>
              Company
            </Typography>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body1">About us</Typography>
            </Link>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body1">Contact us</Typography>
            </Link>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body1">Careers</Typography>
            </Link>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body1">Press</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="body1" color="grey" sx={{ pb: 2 }}>
              Product
            </Typography>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body1">Features</Typography>
            </Link>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body1">Pricing</Typography>
            </Link>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body1">News</Typography>
            </Link>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body1">Help Desk</Typography>
            </Link>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body1">Support</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="body1" color="grey" sx={{ pb: 2 }}>
              Services
            </Typography>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body1">Digital Marketing</Typography>
            </Link>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body1">Content Writing</Typography>
            </Link>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body1">SEO for Business</Typography>
            </Link>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body1">UI Design</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="body1" color="grey" sx={{ pb: 2 }}>
              Legal
            </Typography>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body1">Privacy Policy</Typography>
            </Link>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body1">Terms & Conditions</Typography>
            </Link>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body1">Return Policy</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="body1" color="grey" sx={{ pb: 2 }}>
              Contact us
            </Typography>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body1">support@brainwave.io</Typography>
            </Link>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="body1">+133-394-3439-1435</Typography>
            </Link>
          </Grid>
        </Grid>
        <Divider color="grey" sx={{ mt: 2 }} />
        <Box sx={{ py: 3, display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2" color="grey">
            © 2024 Copyright, All Right Reserved, Made by Seju_ui_ux with 💙
          </Typography>
          <Box>
            {social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                color="inherit"
                sx={{ p: 1 }}
              >
                <item.icon />
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
