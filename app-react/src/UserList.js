import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
function UserList() {
  const [users, setUsers] = useState("")
  const [loading, setLoading] = useState(true)
 useEffect(() => {
  /* 1- axios.get("https://jsonplaceholder.typicode.com/users")
     .then(res=> setUsers(res.data) )
     .catch(err=> console.log(err)) */
 
  //2-
   const fetchdata = async () => {
     try {
       const res = await axios.get("https://jsonplaceholder.typicode.com/users")
       setUsers(res.data)
       setLoading(false)
     }
     catch (error) {
       console.log(error)
     }
   }
   fetchdata()
   }, [])
 return (
  <div>
    {
       loading?<p>...loading </p> :users.map(user => <p>{user.name}</p>)
      }
  </div>
 )
}
export default UserList;