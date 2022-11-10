import { Controller } from "react-hook-form";
import PropTypes from 'prop-types';
import TextField from "@mui/material/TextField";

const FormController = ({control, name, label, helper, type="text", size="small", required, InputLabelProps}) => {
    return (
        <Controller
        control={control}
        name={name}
        rules={{ required: required && "The field is required" }}
        render={({ field, fieldState: { error } }) => (
            <TextField
            {...field}
            label={label}
            type={type}
            size={size}
            InputLabelProps={InputLabelProps}
            required={required}
            error={!!error}
            helperText={error?.message || helper}
            />
        )}
        />
    )
};

FormController.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    helper: PropTypes.string,
    type: PropTypes.string,
    InputLabelProps: PropTypes.bool,
    size: PropTypes.oneOf(["small", "medium"]),
    required: PropTypes.bool,
};

export default FormController;