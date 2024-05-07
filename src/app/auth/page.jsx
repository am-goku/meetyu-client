"use client"
import React from "react"
import "./style.css"
import Login from '../components/auth/Login';

const Signup = React.lazy(() => import("../components/auth/Signup"))


function page() {

  const [signup, setSignup] = React.useState(false)


  const handleSignup = (data) => {
    console.log('====================================');
    console.log("user data", data);
    console.log('====================================');
  }


  return (
    <div className="login flex-1 flex items-center justify-center"   >
      <div className='centerDiv flex w-full justify-center p-5'>
        {
          signup ?
            <>
              <Signup setSignup={setSignup} handleSignup={handleSignup} />
              <div className='icnContainer mainContainer hidden md:flex' />
            </>
            :
            <>
              <div className='icnContainer mainContainer hidden md:flex' />
              <Login setSignup={setSignup} />
            </>
        }
      </div>
    </div>
  );
}

export default page