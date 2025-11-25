import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    error: "",
    gender: "",
  });

  useEffect(() => {
    if (dataForm.name.length > 0 && dataForm.name.length < 3) {
      setDataForm({
        ...dataForm,
        error: "name must be greater than 3 character",
      });
    } else if (dataForm.name > 20) {
      setDataForm({
        ...dataForm,
        error: "name must be less than 20 character",
      });
    } else {
      setDataForm({ ...dataForm, error: "" });
    }
  }, [dataForm.name, dataForm.email]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("dataForm"));
    if (storedData) {
      setDataForm({
        ...dataForm,
        name: storedData.name,
        email: storedData.email,
      });
    }
  }, []);
  return (
    <div>
      <h1 className="header">Form Handling</h1>
      <div className="form">
        <h1 className="login-form">Login Form</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="input-name"
          value={dataForm.name}
          onChange={(e) => {
            setDataForm({ ...dataForm, name: e.target.value });
          }}
        />
        <input
          type="email"
          placeholder="Enter Your Mail"
          className="input-name"
          value={dataForm.email}
          onChange={(e) => {
            setDataForm({ ...dataForm, email: e.target.value });
          }}
        />

        <label className="gender-input-box">
          <input
            type="radio"
            name="gender"
            value="Male"
            className="gender-box"
            checked={dataForm.gender === "Male"}
            onChange={(e) => {
              setDataForm({ ...dataForm, gender: e.target.value });
            }}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={dataForm.gender === "Female"}
            onChange={(e) => {
              setDataForm({ ...dataForm, gender: e.target.value });
            }}
          />
          Female
        </label>
        {dataForm.error ? <p>{dataForm.error}</p> : null}
        <button
          className="btn"
          onClick={() => {
            if (!dataForm.name) {
              alert("error");
              return;
            }
            localStorage.setItem("dataForm", JSON.stringify(dataForm));
            setDataForm({ name: "", email: "", error: "", gender: "" });
          }}
        >
          Submit
        </button>
      </div>
      <h2 className="savedinfo">{dataForm.name}</h2>
      <h2 className="savedinfo">{dataForm.email}</h2>
    </div>
  );
}

export default App;
