import { Box, MenuItem, Select, Stack } from "@mui/material";
import React from "react";
import Card from "./Card";
import UPI from "./UPI";

const Payment = ({ handleChange, values }) => {
  return (
    <Stack
      alignSelf={"center"}
      sx={{ width: "100%", margin: "4rem 0" }}
      alignItems={"center"}
    >
      <Box>
        <label>Payment Method: </label>
        <Select
          value={values.paymentType}
          onChange={handleChange}
          name="paymentType"
        >
          <MenuItem value="card">Card</MenuItem>
          <MenuItem value="upi">UPI</MenuItem>
          <MenuItem value="cod">COD</MenuItem>
        </Select>
        {values.paymentType === "card" ? (
          <Card handleChange={handleChange} values={values} />
        ) : values.paymentType === "upi" ? (
          <UPI />
        ) : null}
      </Box>
    </Stack>
  );
};

export default Payment;
