"use client"
import React from "react"
import "./style.css"
import Login from '../components/auth/Login';
import { user_login } from "@/services/api/methods/auth";
import { useDispatch } from "react-redux";
import { logIn } from "@/utils/features/authSlice";
import { useAppSelector } from "@/utils/store";
import { redirect } from "next/navigation";

const Signup = React.lazy(() => import("../components/auth/Signup"))


function page() {

  const dispatch = useDispatch();

  const [signup, setSignup] = React.useState(false);

  const user = useAppSelector(state => state?.authReducer.user);

  React.useEffect(() => {
    if(user){
      redirect('/c/chat')
    }
  }, [user])


  const handleSignup = (data) => {
    
  }

  const handleSingin = (data) => {
    user_login(data).then((res) => {
      dispatch(logIn(res.user))
    }).catch((err) => console.log(err))
  }


  return (
    <div className="login flex-1 flex items-center justify-center"   >
      <div className='centerDiv flex w-full justify-center p-5'>
        {
          signup ?
            <>
              <Signup setSignup={setSignup} handleSignup={handleSignup} />
              <div className='icnContainer mainContainer hidden md:flex filter dark:invert dark:border dark:border-white' />
            </>
            :
            <>
              <div className='icnContainer mainContainer hidden md:flex filter dark:invert dark:border dark:border-white' />
              <Login gin setSignup={setSignup} handleSignin={handleSingin} />
            </>
        }
      </div>
    </div>
  );
}

export default page