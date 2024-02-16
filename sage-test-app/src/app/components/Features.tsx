import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import Chart from "./assets/Chart.svg";
import Coupon from "./assets/Coupon.svg";
import Customer from "./assets/Customer.svg";
import Layers from "./assets/Layers.svg";
import PreferenceCircle from "./assets/PreferenceCircle.svg";
import ShoppingCart from "./assets/ShoppingCart.svg";

type FeatureProps = {
  icon: ReactElement;
  label: string;
  text: string;
};

const features: FeatureProps[] = [
  {
    icon: <PreferenceCircle />,
    label: "Quick setup process",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    icon: <ShoppingCart />,
    label: "Create custom orders",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    icon: <Coupon />,
    label: "Multiple coupons",
    text: " With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    icon: <Layers />,
    label: "Organize your campaigns",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    icon: <Customer />,
    label: "Manage customers",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    icon: <Chart />,
    label: "Track progress fast",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
];

const Feature: FC<FeatureProps> = ({ icon, label, text }) => (
  <Box>
    <Stack
      direction={"row"}
      sx={{
        gap: 3,
        alignItems: "center",
        minWidth: "322px",
        maxWidth: "322px",
      }}
    >
      <div>{icon}</div>
      <Stack spacing={1}>
        <Typography variant="h6">
          <b>{label}</b>
        </Typography>
        <Typography variant="body1" textAlign={"start"}>
          {text}
        </Typography>
      </Stack>
    </Stack>
  </Box>
);

const Features = () => {
  return (
    <Container>
      <Stack
        sx={{
          gap: 5,
          alignItems: "center",
        }}
      >
        <Stack>
          <Typography variant="h4" sx={{ textAlign: "center", pb: 5 }}>
            <b>Check our features</b>
          </Typography>
          <Box
            sx={{
              maxWidth: "611px",
            }}
          >
            <Typography variant="body2" textAlign="center">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next consultancy website within few minutes.
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={5}>
          {features.map((feature, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Feature {...feature} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

export default Features;
