import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        position: "fixed",
        top: 15,
        left: 0,
        right: 0,
      }}
    >
      <Container>
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography variant="h5">
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
      </Container>
    </Box>
  );
};

export default Header;
