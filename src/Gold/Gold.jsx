import React from 'react'
import logo from '../Asset/logo2.png';
import { useNavigate } from "react-router-dom";

import { IoChevronBackOutline } from "react-icons/io5";

import '../CSS/GoldCss/Gold.css'

const Gold = () => {

    const Back = () => {
        window.location.href = "/select"
    }

    const navigate = useNavigate();

    const handleSubmit = () => {
    const name = document.getElementById("name").value;
    const salary = parseFloat(document.getElementById("salary").value);
    const gram = parseFloat(document.getElementById("gram").value);

    if (name && !isNaN(salary) && !isNaN(gram)) {
      navigate("/goldincentive", {
        state: { name, salary, gram },
      });
    } else {
      alert("Please fill all fields correctly.");
    }
  };

  return (
    <div className='GoldIncentive'>
      <form>
        <img src={logo} alt="ikisha logo" />
        <div className="BackIconContainer">
            <div className="LeftIcon">
                <IoChevronBackOutline onClick={() => Back()} className='icon'/>
            </div>
            <div className="RightText">
                <h1>GOLD INCENTIVE</h1>
            </div>
        </div>
        <label>Enter Salesman Name</label>
        <input type="text" placeholder='Enter Salesman Name' id="name" required /><br />

        <label>Enter Salesman Salary</label>
        <input type="text" placeholder='Enter Salesman Salary' id="salary" required /><br />

        <label>Enter Gold in Gram</label>
        <input type="text" placeholder='Enter Gold in Gram' id="gram" required /><br />

        <div className="Buttons">
            <div className="LeftButton">
                <button type="submit" onClick={handleSubmit} >SUBMIT</button>
            </div>
            <div className="RightButton">
                <button type="reset" >RESET</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Gold
