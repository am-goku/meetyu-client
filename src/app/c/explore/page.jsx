"use client"

import * as React from "react";
import { get_requests, get_suggesions } from "@/services/api/methods/user";
import RequestUser from "@/app/components/users/RequestUser";

const UserPoster = React.lazy(() => import("@/app/components/users/UserPoster"))





const Explore = () => {
  const [users, setUsers] = React.useState([])
  const [request, setRequest] = React.useState([])
  const [tab, setTab] = React.useState('explore')

  React.useEffect(() => {
    get_suggesions().then((data) => {
      console.log(data);
      setUsers(data?.users)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  React.useEffect(() => {
    get_requests().then((data) => {
      console.log("requests: " , data);
      setRequest(data?.requests)
    }).catch((error) => {
      console.log(error)
    })
  }, [])


  React.useEffect(() => {
    document.getElementById(tab).classList.add('border-b-2')
    document.getElementById(tab).classList.add('border-blue-200')
    document.getElementById(tab).classList.add('dark:border-blue-950')
  }, [tab])


  const switchTab = (t) => {
    if (t === tab) return false

    document.getElementById(tab).classList.remove('border-b-2')
    document.getElementById(tab).classList.remove('border-blue-200')
    document.getElementById(tab).classList.remove('dark:border-blue-950')
    setTab(t)
  }




  return (
    <>
      <div className="w-full p-5 flex justify-center items-center uppercase px-10 select-none" >
        <span id="explore" onClick={() => switchTab("explore")} className="cursor-pointer hover:font-bold font-semibold flex-1 text-center">Explore</span>
        <span id="request" onClick={() => switchTab("request")} className="cursor-pointer hover:font-bold font-semibold flex-1 text-center">Requests</span>
      </div>


      {
        tab === 'explore' ?
          <div className="flex-1 p-3 flex flex-wrap gap-10 dark:text-white ">
            {
              users.map((user, i) => {
                return (
                  <UserPoster key={i} user={user} />
                )
              })
            }
          </div> :
          <div className="flex-1 h-full p-3 flex flex-wrap gap-10 dark:text-white ">
            {
              request.map((user, i) => {
                return <RequestUser key={i} user={user} />
              })
            }
          </div>
      }
    </>
  );
};

export default Explore;

