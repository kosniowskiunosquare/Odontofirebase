import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Button from "@mui/material/Button";

const NewPatientForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState("");
  const [date, setDate] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [minor, setMinor] = useState("");
  const [guardiansName, setGuardiansName] = useState("");
  const [guardiansAddress, setGuardiansAddress] = useState("");
  const [guardiansPhone, setGuardiansPhone] = useState("");
  const [ailments, setAilments] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handleDate = (newDate) => {
    setDate(newDate);
  };

  const handlePhone = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleMinor = (event) => {
    setMinor(event.target.value);
  };

  const handleGuardianName = (event) => {
    setGuardiansName(event.target.value);
  };

  const handleGuardianAddress = (event) => {
    setGuardiansAddress(event.target.value);
  };

  const handleGuardianPhone = (event) => {
    setGuardiansPhone(event.target.value);
  };

  const handleAilments = (event) => {
    setAilments(event.target.value);
  };

 

  const addPatientHandler = useCallback(async () => {
    
    try {
      await axios.post(
        "https://us-central1-odontomanager-95368.cloudfunctions.net/app/api/patients",{
          name: name,
          lastname: lastName,
          gender: gender,
          birthdate: date,
          phonenumber: phoneNumber,
          address: address,
          minor: minor,
          guardianfullname: guardiansName,
          guardianaddress: guardiansAddress,
          guardiaphonenumber: guardiansPhone,
          ailments: ailments
        }
      );
      console.log("patient created")
    } catch (err) {
      console.log("Error: ", err);
    }
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    addPatientHandler();
    console.log(name, lastName, gender)
  }

  useEffect(() => {}, []);

  return (

    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 2, width: "40%" },
      }}
      noValidate
      autoComplete="off"
    >
      <h2>Add New Patient</h2>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={name}
        onChange={handleName}
      />

      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={handleLastName}
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          onChange={handleGender}
          label="Gender"
        >
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Male"}>Male</MenuItem>
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="BirthDate"
          inputFormat="MM/dd/yyyy"
          value={date}
          onChange={handleDate}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <TextField
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        value={phoneNumber}
        onChange={handlePhone}
      />
      <TextField
        id="outlined-basic"
        label="Address"
        variant="outlined"
        value={address}
        onChange={handleAddress}
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Is the patient Minor?
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={minor}
          label="Is the patient Minor?"
          onChange={handleMinor}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="outlined-basic"
        label="Guardian's full name"
        variant="outlined"
        value={guardiansName}
        onChange={handleGuardianName}
      />
      <TextField
        id="outlined-basic"
        label="Guardian's Address"
        variant="outlined"
        value={guardiansAddress}
        onChange={handleGuardianAddress}
      />
      <TextField
        id="outlined-basic"
        label="Guardian's Phone number"
        variant="outlined"
        value={guardiansPhone}
        onChange={handleGuardianPhone}
      />
      <TextField
        id="outlined-basic"
        label="Ailments"
        variant="outlined"
        value={ailments}
        onChange={handleAilments}
      />
      <Button variant="contained" type="submit" onClick={submitHandler}>ADD</Button>
    </Box>
  );
};

export default NewPatientForm;
