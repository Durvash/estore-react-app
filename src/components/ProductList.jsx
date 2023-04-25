import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ProductList = () => {
  
  return (
    <React.Fragment>
      <Grid container component="main">
        <Grid item xs={12} sm={12} md={2} component={Paper}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Product Filter
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={10} component={Paper} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Products Listing
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
            >
            
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ProductList;
