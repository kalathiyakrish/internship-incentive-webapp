import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/NextPage.css'

const NextPage = () => {

    const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [navigate]);
  return (
    <div className='NextPage'>
        <></>
    </div>
  )
}

export default NextPage;
