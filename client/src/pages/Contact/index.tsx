import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import tuktuk from "../../assets/images/tuktuk.jpg";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};
const initialFormData: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [formState, setFormState] = useState<FormState>(initialFormData);
  const [userMessage, setUserMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  // TODO: Implement HandleSubmit functionality post refactor
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUserMessage("Your message has been sent!");
    setFormState(initialFormData);
    setTimeout(() => {
      setUserMessage("");
    }, 3000);
  };
  // TODO: Implment clear form function
  return (
    <div
      style={{
        position: "fixed",
        backgroundImage: `url(${tuktuk})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingTop: 10,
        paddingBottom: 10,
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: "white",
            padding: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 2,
            boxShadow: 10,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Contact Us
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
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
                  value={formState.lastName}
                  onChange={handleChange}
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
                  value={formState.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  label="Your Message"
                  type="text"
                  multiline
                  minRows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#010041",
                "&:hover": { backgroundColor: "green" },
              }}
            >
              Submit
            </Button>
          </Box>
          {userMessage && <Typography>{userMessage}</Typography>}
        </Box>
      </Container>
    </div>
  );
}
