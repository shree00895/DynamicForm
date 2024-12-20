import React from "react";
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
    <div>
      <input
        type="file"
        accept=".json"
        name="json-collect"
        onChange={handleChange}
      />
      <div>
        <button onClick={handleClick} style={{ marginTop: "20px" }}>
          Generate dynamic form
        </button>
      </div>
    </div>
  );
};

export default JSONCollector;
