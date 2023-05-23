import React,{useEffect} from 'react'
import axios from 'axios'
import { useState } from 'react'

function Third() {


    const [FirstScreenData, setFirstScreenData]=useState()
    const [SecoundScreenData, setSecoundScreenData]=useState()
    console.log(FirstScreenData,SecoundScreenData,"FirstScreenData")
    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
        
     "name":FirstScreenData && FirstScreenData.name,
      "mobile":FirstScreenData && FirstScreenData.mobile,
      "email": FirstScreenData && FirstScreenData.email,
      "addressLine1":SecoundScreenData && SecoundScreenData.addressLine1,
      "addressLine2": SecoundScreenData && SecoundScreenData.addressLine2,
      "city": SecoundScreenData && SecoundScreenData.city,
      "state":SecoundScreenData &&  SecoundScreenData.state,
      "country":SecoundScreenData && SecoundScreenData.country,
      "pincode":SecoundScreenData &&  SecoundScreenData.pincode,
        }
        axios.post(`https://webhook.site/2e1d34bf-7b07-484e-94df-3b37cc593d81`, payload, {
        //   headers: {
        //     // "Content-Types": "multipart/form-data",
        //     "x-access-token": `${token}`,
        //   }
        })
          .then((res) => {
           
             
            console.log(res)
           
    
    
          })
          .catch((err) => {
            
            console.log(err)
          })
      }


      useEffect(()=>{
        
        let FirstScreen = JSON.parse(localStorage.getItem("FirstScreen"))
        setFirstScreenData(FirstScreen)
        console.log(FirstScreen,"FirstScreen")
        let SecoundScreen = JSON.parse(localStorage.getItem("SecoundScreen"))
        setSecoundScreenData(SecoundScreen)
        console.log(SecoundScreen,"SecoundScreen")
     
     
      },[])
  return (
    <div>
    <div>name : {FirstScreenData && FirstScreenData.name}</div>
    <div>mobile : {FirstScreenData && FirstScreenData.mobile}</div>
    <div>email : {FirstScreenData && FirstScreenData.email}</div>
    <div>Address Line 1 : {SecoundScreenData && SecoundScreenData.addressLine1}</div>
    <div>Address Line 2 : {SecoundScreenData && SecoundScreenData.addressLine2}</div>
    <div>City : {SecoundScreenData && SecoundScreenData.city}</div>
    <div>State : {SecoundScreenData &&  SecoundScreenData.state}</div>
    <div>Country: {SecoundScreenData && SecoundScreenData.country}</div>
    <div>Pincode: {SecoundScreenData &&  SecoundScreenData.pincode}</div>
    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Third