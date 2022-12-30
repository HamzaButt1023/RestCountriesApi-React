import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import CountriesData from "./components/CountriesData";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [record, setRecord] = useState([]);
  const [userCountryName, setuserCountryName] = useState("");

  const getData = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${userCountryName}`)
      .then((res) => {
        setRecord((prevData) => [...prevData, ...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    setuserCountryName("");
  };
  return (
    <Router>
      <div className="bg-dark text-white">
        <Title />
        <Routes>
          <Route
            path="/"
            element={
              <CountriesData
                record={record}
                getData={getData}
                userCountryName={userCountryName}
                setuserCountryName={setuserCountryName}
              />
            }
          />
          <Route path="/card/:common" element={<Card record={record} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
