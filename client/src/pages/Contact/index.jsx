import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function SignUp() {
  const handleSubmit = (event) => {
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Contact Us
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="message"
                  label="Your Message"
                  type="text"
                  multiline
                  minRows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    
  );
}


















// import React from "react";
// import { Typography, Card, CardContent, Grid, TextField, Button } from "@mui/material";

// export default function Contact() {
//   return (
//     <div className="Contact">
//       <Typography gutterBottom variant="h3" align="center">
//         Contact Us
//       </Typography>  
//       <Card style = {{maxWidth:450, margin: "0 auto", padding:"20px 5px"}}>
//         <CardContent>
//           <Typography variant = "h5"></Typography>
//           <form>
//           <Grid container spacing={1}>
//             <Grid xs={12} sm={6} item>
//               <TextField label = 'Your Name' placeholder = 'Enter First Name' variant="outlined" fullWidth required/>        
//             </Grid>
//             <Grid xs={12} sm={6} item>
//               <TextField type="email" label = 'Email Address' placeholder = 'Enter Email' variant="outlined"fullWidth required/>        
//             </Grid>
//             <Grid xs={12} sm={6} item>
//               <TextField label = 'Your Message' multiline rows={4} placeholder = 'Whats on your mind?' variant="outlined"fullWidth required/>        
//             </Grid>
//             <Grid>
//               <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
//             </Grid>
//           </Grid>
//           </form>
//         </CardContent>
//       </Card>

//     </div>
      


//   )
// }

