import React, { useState } from "react";
import CohortList from "./CohortList";

const StudentInfoCard = ({datas,names,username,dob,profilePhoto, dobreturn, cohort}) => { //need all the info so I can use it in the return -- needs to be pass from - student list. 
//2/3/1979 --- February 3, 1979;

return (
    //need to make it into another conpoent - where it shows the 4 things - then this coponment bring it out base on HOW MANY STUDENT. 
    <>
    <img src = {profilePhoto}/>
    <p><strong>{names.preferredName} {names.middleName[0]}. {names.surname}</strong></p>
    <p>{username}</p>
    <p>Birthday: {dobreturn}</p>
    {/* <p>{cohort.cohortCode}</p> */}
    {/* <li>Birthday:{dob}</li> */}
    </>
//maybe MAKE A FUNCTION THAT DOES THE BIRTHDAY CALUCATION. INTO STRING. 
)
}

export default StudentInfoCard;