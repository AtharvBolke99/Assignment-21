import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    error: "",
  });

  useEffect(() => {
    if ( dataForm.name.length >0 && dataForm.name.length < 3) {
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
    const storedData = JSON.parse(localStorage.getItem(dataForm));
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
      <p>{dataForm.name}</p>
      <p>{dataForm.email}</p>
      <p>{dataForm.error}</p>
      <div className="form">
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
          placeholder="Enter Your mail"
          className="input-name"
          value={dataForm.email}
          onChange={(e) => {
            setDataForm({ ...dataForm, email: e.target.value });
          }}
        />
        <button
          className="btn"
          onClick={() => {
            if (!dataForm.name) {
              alert("error");
              return;
            }
            localStorage.setItem("dataForm", JSON.stringify(dataForm));
            setDataForm({ name: "", email: "", error: "" });
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
