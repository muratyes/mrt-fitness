import React from "react";
import { Box, Typography, Grid, Card, CardContent, Avatar } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const UeberUns = () => {
  return (
    <Box>
      {/* Üstte Resim */}
      <Box
        sx={{
          width: "100%",
          height: "400px",
          backgroundImage: 'url("/images/mrtfitness.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          mb: 3,
        }}
      ></Box>

 <Box sx={{ mt: 8 }}></Box>
      {/*Infoboxen */}
      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: "center", p: 2 }}>
            <CardContent>
              <Avatar sx={{ bgcolor: "primary.main", mx: "auto", mb: 2 }}>
                <PhoneIcon />
              </Avatar>
              <Typography variant="h6">+123456789</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: "center", p: 2 }}>
            <CardContent>
              <Avatar sx={{ bgcolor: "secondary.main", mx: "auto", mb: 2 }}>
                <EmailIcon />
              </Avatar>
              <Typography variant="h6">contact@mrt-fitness.com</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: "center", p: 2 }}>
            <CardContent>
              <Avatar sx={{ bgcolor: "error.main", mx: "auto", mb: 2 }}>
                <LocationOnIcon />
              </Avatar>
              <Typography variant="h6">123 Fitness Street</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

 <Box sx={{ mt: 8 }}></Box> 
      {/* Partners */}
      <Box sx={{ textAlign: "center", py: 4, bgcolor: "background.paper" }}>
      <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: "orange" }} 
          >
            Unsere Partner
          </Typography>
          <Box sx={{ mt: 6 }}></Box>
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <img src="/images/uci.PNG" alt="uci" style={{ height: 60 }} />
          </Grid>
          <Grid item>
            <img src="/images/hello.PNG" alt="Hello Fresh" style={{ height: 60 }} />
          </Grid>
          <Grid item>
            <img src="/images/upfit.PNG" alt="Upfit" style={{ height: 60 }} />
          </Grid>
          <Grid item>
            <img src="/images/veganz.PNG" alt="Veganz" style={{ height: 60 }} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UeberUns;
