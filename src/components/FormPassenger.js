import { useForm } from "react-hook-form";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import FormController from "./FormController";

const FormPassenger = () => {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
      console.log(data);
    };
    return (
        <>
        <Box m="56px 96px;">
            <Typography variant="h3">Passenger information</Typography>
            <Typography variant="body1" mb="36px">Enter the required information for each traveler and be sure that it exactly matches the government-issued ID presented at the airport.</Typography>
            <Typography variant="h4">Passenger 1 (Adult)</Typography>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Box>
                    <FormController control={control} label="First name" name="firstName" required/>
                    <FormController control={control} label="Middle" name="middle"/>
                    <FormController control={control} label="Last name" name="lastName" required/>
                </Box> 
                <Box>
                    <FormController control={control} label="Suffix" name="suffix"/>
                    <FormController control={control} label="Date of birth" InputLabelProps={{ shrink: true }} size="medium" name="dateOfBirth" helper="MM/DD/YY" type="date" required/>
                </Box>
                <Box>
                    <FormController control={control} label="Email address" name="emailAddress" size="medium" type="email" required/>
                    <FormController control={control} label="Phone number" name="phoneNumber" size="medium" required/>
                </Box>
                <Box>
                    <FormController control={control} label="Redress number" name="redressNumber" size="medium"/>
                    <FormController control={control} label="Known traveller number" name="travellerNumber" size="medium" required/>
                </Box>
                <Button type="submit" variant="contained" size="large"> Submit</Button>
            </form>
        </Box>
        </>
    )
};

export default FormPassenger;