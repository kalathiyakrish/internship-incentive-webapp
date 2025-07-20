import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Home.css'

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/next'); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className='HomePage'>
      <></>
    </div>
  )
}

export default Home;
