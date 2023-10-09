import { useState } from "react"

export default function Form(){
const[firstname,setFirstName]=useState('');
const[lastname,setLastName]=useState('');
const[fullName,setFullName]=useState('');

function getfirstname(e){
setFirstName(e.target.value);
setFullName(e.target.value+''+lastname);
}
function getlasttname(e){
    setLastName(e.target.value);
setFullName(firstname+''+e.target.value);
}

    return(
        <>
        First Name: <input type="text"
        value={firstname}
        onChange={getfirstname}
        /> <br/> <br/>
        Last Name: <input type="text"
        value={lastname}
        onChange={getlasttname}
        />

        <p>Your first name : {firstname}</p>
        <p>Your last name : {lastname}</p>
        <p>Your Full name : {fullName}</p>
        </>


        
    )
}