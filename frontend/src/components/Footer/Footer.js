import React from 'react';
import { Grid, Typography, Box, Link } from '@mui/material';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box sx={{ marginTop: 4 }}>
    <footer style={{ backgroundColor: 'white', padding: '30px', borderTop: '2px solid #ddd' }}>
      <Grid container spacing={2} justifyContent="space-between">
        {/* Logo */}
        <Grid item xs={4}>
          <img src="/images/logo.png" alt="MRT-Fitness Logo" style={{ width: '120px' }} />
          <br></br>
          <Typography variant="body2" color="textSecondary" align="center">
          " Bewegen Sie sich, bleiben Sie jung !"
        </Typography>
        </Grid>
        
        {/* Links */}
        <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="#" style={{ color: 'black', textDecoration: 'none' }}>Datenschutz</Link></li>
            <li><Link href="#" style={{ color: 'black', textDecoration: 'none' }}>AGB</Link></li>
          </ul>
        </Grid>
        
        {/* Kontaktinformationen */}
        <Grid item xs={4}>
          <Typography variant="body2" color="textSecondary" align="right">
            Address: 123 Fitness Street
          </Typography>
          <Typography variant="body2" color="textSecondary" align="right">
            Tel: +123456789
          </Typography>
          <Typography variant="body2" color="textSecondary" align="right">
            Email: contact@fitness.com
          </Typography>
        </Grid>
      </Grid>
        {/* Sozial Media İcon */}
        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
          <Grid item>
            <Link href="https://www.facebook.com" target="_blank" style={{ color: '#3b5998', marginRight: '15px' }}>
              <FaFacebook size={30} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" style={{ color: '#E1306C', marginRight: '15px' }}>
              <FaInstagram size={30} />
            </Link>
            <Link href="https://www.youtube.com" target="_blank" style={{ color: '#FF0000' }}>
              <FaYoutube size={30} />
            </Link>
          </Grid>
        </Grid>
      
      {/*Untertext */}
      <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
        <Typography variant="body2" color="textSecondary" align="center">
        Alle Rechte liegen bei MRT-Fitness. © 2025
        </Typography>
      </Grid>
     
    </footer>
    </Box>
  );
};

export default Footer;
