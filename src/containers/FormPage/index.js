import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import SelectionWidget from "../../components/selectionWidget/index";

function FormPage() {
  const navigate = useNavigate();
  const color = [{ name: "Red" }, { name: "Blue" }, { name: "Green" }];
  const make = [
    { name: "Small" },
    { name: "Medium" },
    { name: "Large" },
    { name: "Extra-Large" },
  ];

  const [selectedColor, setSelectedColor] = useState(color[0].name);
  const [selectedSize, setSelectedSize] = useState(make[0].name);
  const [textValue, setTextValue] = useState(null);
  const [showData, setShowData] = useState(false);

  function handleGetSelectedColor(e) {
    setSelectedColor(e.target.id);
  }
  function handleGetSelectedSize(e) {
    setSelectedSize(e.target.id);
  }

  function handleTextChange(e) {
    setTextValue(e.target.value);
  }

  function handleGoBack() {
    navigate("/Landing-page");
  }

  function handleSubmit() {
    setShowData(true);
  }
  console.log(selectedColor, selectedSize, textValue);

  return (
    <div className="container">
      <div>
        <label>COLOR : </label>
        <SelectionWidget
          options={color}
          initialSelection={selectedColor}
          handleFun={handleGetSelectedColor}
        />
      </div>
      <div>
        <label>MAKE : </label>
        <SelectionWidget
          options={make}
          initialSelection={selectedSize}
          handleFun={handleGetSelectedSize}
        />
      </div>

      <div>
        <label>NAME : </label> <br />
        <input
          type="text"
          className="form-field"
          id="name"
          onChange={handleTextChange}
        />
      </div>

      <button className="btn btn-secondary-small" onClick={handleGoBack}>
        Go Back
      </button>
      <button className="btn btn-primary-small" onClick={handleSubmit}>
        Submit
      </button>
      {showData && (
        <div className="form-content">
          <div>color: {selectedColor}</div>
          <div>make: {selectedSize}</div>
          <div>name : {textValue}</div>
        </div>
      )}
    </div>
  );
}

export default FormPage;
