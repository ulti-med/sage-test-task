import {
  AppBar,
  AppBarProps,
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { FC, forwardRef } from "react";

export type HeaderProps = AppBarProps;

const Header: FC<HeaderProps> = forwardRef(({ children, ...rest }, ref) => {
  return (
    <AppBar
      {...rest}
      ref={ref}
      className=".mui-fixed"
      sx={{
        position: "sticky",
        backgroundColor: "background.default",
        alignSelf: "center",
        paddingBottom: 10,
        paddingTop: 5,
        boxShadow: "none",
        paddingRight: "0 !important", // Hack to avoid header shifting with Mui adding 20px padding if popovers are open
        ...rest.sx,
      }}
    >
      <Container>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" color={"#161C2D"}>
            <b>Brainwave.io</b>
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button sx={{ textTransform: "none" }}>
              <Typography variant="h6" color={"#161C2D"}>
                Demos
              </Typography>
            </Button>
            <Button sx={{ textTransform: "none" }}>
              <Typography variant="h6" color={"#161C2D"}>
                Pages
              </Typography>
            </Button>
            <Button sx={{ textTransform: "none" }}>
              <Typography variant="h6" color={"#161C2D"}>
                Support
              </Typography>
            </Button>
            <Button sx={{ textTransform: "none" }}>
              <Typography variant="h6" color={"#161C2D"}>
                Contact
              </Typography>
            </Button>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                height: "25px",
                alignSelf: "center",
              }}
            />
            <Button sx={{ textTransform: "none" }}>
              <Typography variant="h6" color={"#161C2D"}>
                Sign In
              </Typography>
            </Button>

            <Box
              sx={{
                borderRadius: 3,
                backgroundColor: "blue",
                maxWidth: 124,
                height: 45,
              }}
            >
              <Button
                sx={{
                  textTransform: "none",
                }}
              >
                <Typography variant="h6" color={"white"}>
                  Sign Up
                </Typography>
              </Button>
            </Box>
          </Stack>
        </Stack>
        {children}
      </Container>
    </AppBar>
  );
});

export default Header;
