import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../Asset/logo2.png";
import { IoChevronBackOutline } from "react-icons/io5";

import '../CSS/CaratCss/CaratIncentive.css'

const CaratIncentive = () => {
  const location = useLocation();
  const state = location.state || JSON.parse(localStorage.getItem("caratState"));

  const [incentiveRate, setIncentiveRate] = useState(0);
  const [totalIncentive, setTotalIncentive] = useState(0);
  const [amountPerMonth, setAmountPerMonth] = useState(0);
  const [salaryPerMonth, setSalaryPerMonth] = useState(0);
  const [salaryPerYear, setSalaryPerYear] = useState(0);
  const [perGramRate, setPerGramRate] = useState(0);

  const BackChange = () => {
    window.location.href = "/carat";
  };

  useEffect(() => {
    if (location.state) {
      localStorage.setItem("caratState", JSON.stringify(location.state));
    }

    if (state?.salary && state?.gram) {
      const salary = parseInt(state.salary);
      const CT = parseInt(state.gram);
      const MONTHS = 12;
      let RATE = 0;

      if (salary === 20000) {
        if (CT <= 10000) RATE = 10 * Math.floor((CT - 1) / 250) + 20;
      } else if (salary === 22500) {
        if (CT > 750 && CT <= 10000) RATE = 10 * Math.floor((CT - 751) / 250) + 10;
      } else if (salary === 25000) {
        if (CT > 1250 && CT <= 10000) RATE = 10 * Math.floor((CT - 1251) / 250) + 10;
      } else if (salary === 27500) {
        if (CT > 1750 && CT <= 10000) RATE = 10 * Math.floor((CT - 1751) / 250) + 10;
      } else if (salary === 30000) {
        if (CT > 2250 && CT <= 10000) RATE = 10 * Math.floor((CT - 2251) / 250) + 10;
      } else if (salary === 32500) {
        if (CT > 2500 && CT <= 2750) RATE = 5;
        else if (CT > 2750 && CT <= 10000) RATE = 10 * Math.floor((CT - 2751) / 250) + 10;
      } else if (salary === 35000) {
        if (CT > 3000 && CT <= 3250) RATE = 5;
        else if (CT > 3250 && CT <= 10000) RATE = 10 * Math.floor((CT - 3251) / 250) + 10;
      }

      const totalIncentive = CT * RATE;
      const monthlyIncentive = totalIncentive / MONTHS;
      const monthlySalary = salary + monthlyIncentive;
      const yearlySalary = monthlySalary * MONTHS;
      const ratePerGram = monthlySalary / CT;

      setIncentiveRate(RATE);
      setTotalIncentive(totalIncentive);
      setAmountPerMonth(monthlyIncentive);
      setSalaryPerMonth(monthlySalary);
      setSalaryPerYear(yearlySalary);
      setPerGramRate(ratePerGram);
    }
  }, [location.state, state]);

  if (!state) return <p>Error: No data available</p>;

  return (
    <div className="container_details">
      <div className="logo_logo">
        <img src={logo} alt="NPJ Logo" />
      </div>
      <form>
        <div className="back_class">
          <IoChevronBackOutline
            onClick={BackChange}
            className="back_icon"
          />
          <h2>SALARY BREAKDOWN FOR {state.name}</h2>
        </div>
        <div className="input_grid">
          <div className="input_group">
            <label>Your Current Salary Per Month</label>
            <input type="text" readOnly value={state.salary} />
          </div>
          <div className="input_group">
            <label>Carats Entered</label>
            <input type="text" readOnly value={state.gram} />
          </div>
          <div className="input_group">
            <label>Incentive Rate</label>
            <input type="text" readOnly value={incentiveRate.toFixed(2)} />
          </div>
          <div className="input_group">
            <label>Total Incentive</label>
            <input type="text" readOnly value={totalIncentive.toFixed(2)} />
          </div>
          <div className="input_group">
            <label>Amount Per Month</label>
            <input type="text" readOnly value={amountPerMonth.toFixed(2)} />
          </div>
          <div className="input_group">
            <label>Salary Per Month With Incentive</label>
            <input type="text" readOnly value={salaryPerMonth.toFixed(2)} />
          </div>
          <div className="input_group">
            <label>Salary Per Year</label>
            <input type="text" readOnly value={salaryPerYear.toFixed(2)} />
          </div>
          <div className="input_group">
            <label>Per Carat Rate</label>
            <input type="text" readOnly value={perGramRate.toFixed(2)} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CaratIncentive;
