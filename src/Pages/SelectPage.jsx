import React from 'react'
import '../CSS/SelectPage.css'
import logo from '../Asset/logo2.png';

const SelectPage = () => {
    const Gold = () => {
        window.location.href = "/gold"
    }

    const Carat = () => {
        window.location.href = "/carat"
    }

  return (
    <div className='SelectPage'>
        <img src={logo} alt="" />
      <h1>CHOICE INCENTIVE</h1>
      <hr />
      <p>IKISHA - marks the beginning of a bold new era of designer diamond jewellery. <br />
        Each masterpiece is a rare work of art, meticulously crafted to command attention and inspire elegance. <br />
        With unparalleled designs and exquisite details, IKISHA celebrates individuality through diamonds shaped with vision and conviction. <br />
        This is not just jewellery, it is the ultimate universe of brilliance and luxury.</p>
        <div className="ChoiceButtons">
            <div className="LeftButton">
                <button onClick={() => Gold()}>GOLD INCENTIVE</button>
            </div>
            <div className="RightButton">
                <button onClick={() => Carat()}>CARAT INCENTIVE</button>
            </div>
        </div>
    </div>
  )
}

export default SelectPage
