import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  Container,
  Typography,
} from "@mui/material";

type ReservationFormState = {
  startDate: Date;
  title: string;
  description: string;
  category: string;
  transportationType: string;
  provider: string;
  status: string;
  price: number;
  priceCurrency: string;
};

type ReservationUpdateFormProps = {
  reservation: ReservationFormState;
  setReservation: React.SetStateAction<ReservationFormState>;
};

const categories: string[] = [
  "Lodging",
  "Transportation",
  "Service",
  "Activity",
  "Other",
];
const statuses: string[] = [
  "Idea",
  "Agreed",
  "Verbal Reservation",
  "Online Reservation",
  "Paid",
  "Canceled",
  "Arrange Onsite",
];

const transportationTypes: string[] = [
  "Taxi",
  "Personal Car",
  "Rental Car",
  "Bus",
  "Train/Subway",
  "Airplane",
  "UFO",
  "Water Taxi",
  "Ferry",
  "Ship",
  "Camel",
  "Emu",
  "Walking",
  "Snowshoes",
  "TBD",
];

const initialFormValue = {
  startDate: new Date(),
  title: "",
  description: "",
  category: "Lodging",
  transportationType: "Taxi",
  provider: "",
  status: "Idea",
  price: 0,
  priceCurrency: "$",
};

const ReservationUpdateForm = ({ reservation }: ReservationUpdateFormProps) => {
  const [formValues, setFormValues] = useState(initialFormValue);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...reservation,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Form values:", formValues);
  };

  const handleCancel = () => {
    // Handle cancel logic here
    setFormValues(initialFormValue);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Update Reservation
      </Typography>
      <Grid container xs={8} spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Title"
            name="title"
            required
            value={formValues.title}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Category"
            select
            name="category"
            value={formValues.category}
            onChange={handleChange}
            fullWidth
          >
            {categories.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Transportation Type"
            select
            name="transportationType"
            value={formValues.transportationType}
            onChange={handleChange}
            fullWidth
          >
            {transportationTypes.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Provider"
            name="title"
            value={formValues.provider}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            select
            label="Status"
            helperText="How solid is this reservation?"
            name="status"
            defaultValue={formValues.status}
            onChange={handleChange}
            fullWidth
          >
            {statuses.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Price"
            name="price"
            value={formValues.price}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Currency"
            name="priceCurrency"
            value={formValues.priceCurrency}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Start Date"
            required
            type="date"
            name="startDate"
            value={formValues.startDate}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="End Date (if applicable)"
            type="date"
            name="endDate"
            value={formValues.startDate}
            onChange={handleChange}
            helperText="e.g. hotel checkout date. Leave blank for single-day plans"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Description/Notes"
            name="description"
            value={formValues.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCancel}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ReservationUpdateForm;
