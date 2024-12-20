import React from "react";
import { Button, TextField, FormLabel } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const JSONCollector = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target?.result;

      // here text can be string or arrayBuffer that's why checked before saving it into the store
      if (text && typeof text === "string") {
        dispatch({ type: "save", payload: JSON.parse(text) });
      }
    };

    reader.readAsText(e.target.files[0]);
  };

  const handleClick = () => {
    navigate("/dynamic-form");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <FormLabel id="input-field-label">Upload Form Schema</FormLabel>

      <div>
        <TextField
          sx={{ height: "50px" }}
          type="file"
          name="json-collect"
          onChange={handleChange}
        />
      </div>
      <div>
        <Button
          sx={{ height: "50px", marginTop: "20px" }}
          variant="contained"
          onClick={handleClick}
        >
          Generate dynamic form
        </Button>
      </div>
    </div>
  );
};

export default JSONCollector;
