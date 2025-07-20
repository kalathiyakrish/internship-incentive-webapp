import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../Asset/logo2.png";
import { IoChevronBackOutline } from "react-icons/io5";

import '../CSS/GoldCss/GoldIncentive.css'

const Details = () => {
  const location = useLocation();
  const state = location.state || JSON.parse(localStorage.getItem("goldState"));

  const [loading, setLoading] = useState(true);
  const [incentiveRate, setIncentiveRate] = useState(0);
  const [totalIncentive, setTotalIncentive] = useState(0);
  const [amountPerMonth, setAmountPerMonth] = useState(0);
  const [salaryPerMonth, setSalaryPerMonth] = useState(0);
  const [salaryPerYear, setSalaryPerYear] = useState(0);
  const [perGramRate, setPerGramRate] = useState(0);

  const MONTHS = 12;

  const Back = () => {
    window.location.href = "/gold";
  };

  useEffect(() => {
    if (location.state) {
      localStorage.setItem("goldState", JSON.stringify(location.state));
    }
    if (state?.salary && state?.gram) {
      const salary = parseFloat(state.salary);
      const gram = parseFloat(state.gram);
      let ins = 0;

      if (salary <= 35000) {
        if (gram <= 35000) ins = 0;
        else if (gram >= 35000 && gram < 37500) ins = 2.5;
        else if (gram >= 37500 && gram < 40000) ins = 3;
        else if (gram >= 40000 && gram < 42500) ins = 2;
        else if (gram >= 42500 && gram < 45000) ins = 2.5;
        else if (gram >= 45000 && gram < 47500) ins = 3;
        else if (gram >= 47500 && gram < 50000) ins = 3.5;
        else if (gram >= 50000 && gram < 52500) ins = 4;
        else if (gram >= 52500 && gram < 55000) ins = 4.5;
        else if (gram >= 55000 && gram < 57500) ins = 5;
        else if (gram >= 57500 && gram < 60000) ins = 5.5;
        else if (gram >= 60000 && gram < 62500) ins = 6;
        else if (gram >= 62500 && gram < 65000) ins = 6.5;
        else if (gram >= 65000 && gram < 67500) ins = 7;
        else if (gram >= 67500 && gram < 70000) ins = 7.5;
        else if (gram >= 70000 && gram < 72500) ins = 8;
        else if (gram >= 72500 && gram < 75000) ins = 8.5;
        else if (gram >= 75000 && gram < 77500) ins = 9;
        else if (gram >= 77500 && gram < 80000) ins = 9.5;
        else if (gram >= 80000 && gram < 82500) ins = 10;
        else if (gram >= 82500 && gram < 85000) ins = 10.5;
        else if (gram >= 85000 && gram < 87500) ins = 11;
        else if (gram >= 87500 && gram < 90000) ins = 11.5;
        else if (gram >= 90000 && gram < 92500) ins = 12;
        else if (gram >= 92500 && gram < 95000) ins = 12.5;
        else if (gram >= 95000 && gram < 97500) ins = 13;
        else if (gram >= 97500 && gram < 100000) ins = 13.5;
        else ins = 0;
      }

      if (gram > 100000) {
        ins = 21;
      } else {
        let base = 0;

        if (salary <= 20000) base = 0;
        else if (salary <= 22500) base = 10000;
        else if (salary <= 25000) base = 15000;
        else if (salary <= 27500) base = 20000;
        else if (salary <= 30000) base = 25000;
        else if (salary <= 32500) base = 30000;
        else base = Infinity;

        if (gram > base) {
          ins = 1 + Math.floor((gram - base) / 2500) * 0.5;
        }
      }

      const totalIncentive = gram * ins;
      const monthlyIncentive = totalIncentive / MONTHS;
      const monthlySalary = salary + monthlyIncentive;
      const yearlySalary = monthlySalary * MONTHS;
      const ratePerGram = monthlySalary / gram;

      setIncentiveRate(ins);
      setTotalIncentive(totalIncentive);
      setAmountPerMonth(monthlyIncentive);
      setSalaryPerMonth(monthlySalary);
      setSalaryPerYear(yearlySalary);
      setPerGramRate(ratePerGram);
    }

    setLoading(false); // end loading once state is processed
  },  [location.state, state]);

  if (loading) return <p>Loading...</p>;
  if (!state) return <p>Error: No data available</p>;

  return (
    <div className="container_details">
      <div className="logo_logo">
        <img src={logo} alt="NPJ Logo" />
      </div>
      <form>
        <div className="back_class">
          <IoChevronBackOutline onClick={Back} className="back_icon" />
          <h2>SALARY BREAKDOWN FOR {state.name}</h2>
        </div>
        <div className="input_grid">
          <div className="input_group">
            <label>Your Current Salary Per Month</label>
            <input type="text" readOnly value={state.salary} />
          </div>
          <div className="input_group">
            <label>Grams Entered</label>
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
            <label>Per Gram Rate</label>
            <input type="text" readOnly value={perGramRate.toFixed(2)} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Details;
