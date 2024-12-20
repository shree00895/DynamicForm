import React from "react";
import { Button, TextField } from "@mui/material";
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
      <TextField
        sx={{ height: "50px" }}
        type="file"
        name="json-collect"
        onChange={handleChange}
      />
      <Button
        sx={{ height: "50px", marginLeft: "10px" }}
        variant="contained"
        onClick={handleClick}
      >
        Generate dynamic form
      </Button>
    </div>
  );
};

export default JSONCollector;
