import React, { useState } from "react";

const StudentInfoCard = ({datas,names,username,dob,profilePhoto, dobreturn}) => { //need all the info so I can use it in the return -- needs to be pass from - student list. 
//2/3/1979 --- February 3, 1979;

// return (
// datas.map(({names,username,dob,profilePhoto}) => {
//     let dobreturn = "";

//     for (let i = 0; i < dob.length; i++){ 
//         //console.log(dob[0])
//         if (dob[0] === "1" && dob[1] === "/" && dob[3] === "/" ) {//1/2/1997
//             //if first is 1 - and second is / meaning its jan - && if dob[3] is / meaning its single day.  
//             dobreturn = `January ${dob.substring(2,3)}, ${dob.substring(dob.length-4,dob.length)}`
//         } else if (dob[0] === "1" && dob[1] === "/" && dob[4] === "/") {//1/23/1994
//             //dob[4] if its / meaing its a double date. so push the return 2 spot for 2 digit.
//             dobreturn = `January ${dob.substring(2,4)}, ${dob.substring(dob.length-4,dob.length)}`
//         //-----------
//         } else if (dob[0] === "2" && dob[1] === "/" && dob[3] === "/") {
//             dobreturn = `February ${dob.substring(2,3)}, ${dob.substring(dob.length-4,dob.length)}`
//         } else if (dob[0] === "2" && dob[1] === "/" && dob[4] === "/") {
//             dobreturn = `February ${dob.substring(2,4)}, ${dob.substring(dob.length-4,dob.length)}`
//         //-----------
//         } else if (dob[0] === "3" && dob[1] === "/" && dob[3] === "/") {
//             dobreturn = `March ${dob.substring(2,3)}, ${dob.substring(dob.length-4,dob.length)}`
//         } else if (dob[0] === "3" && dob[1] === "/" && dob[4] === "/") {
//             dobreturn = `March ${dob.substring(2,4)}, ${dob.substring(dob.length-4,dob.length)}`
//         //-----------
//         } else if (dob[0] === "4" && dob[1] === "/" && dob[3] === "/") {
//             dobreturn = `April ${dob.substring(2,3)}, ${dob.substring(dob.length-4,dob.length)}`
//         } else if (dob[0] === "4" && dob[1] === "/" && dob[4] === "/") {
//             dobreturn = `April ${dob.substring(2,4)}, ${dob.substring(dob.length-4,dob.length)}`
//         //---------
//         } else if (dob[0] === "5" && dob[1] === "/" && dob[3] === "/") {
//             dobreturn = `May ${dob.substring(2,3)}, ${dob.substring(dob.length-4,dob.length)}`
//         } else if (dob[0] === "5" && dob[1] === "/" && dob[4] === "/") {
//             dobreturn = `May ${dob.substring(2,4)}, ${dob.substring(dob.length-4,dob.length)}`
//         //-----------
//         } else if (dob[0] === "6" && dob[1] === "/" && dob[3] === "/") {
//             dobreturn = `June ${dob.substring(2,3)}, ${dob.substring(dob.length-4,dob.length)}`
//         } else if (dob[0] === "6" && dob[1] === "/" && dob[4] === "/") {
//             dobreturn = `June ${dob.substring(2,4)}, ${dob.substring(dob.length-4,dob.length)}`
//         //-------    
//         } else if (dob[0] === "7" && dob[1] === "/" && dob[3] === "/") {
//             dobreturn = `July ${dob.substring(2,3)}, ${dob.substring(dob.length-4,dob.length)}`
//         } else if (dob[0] === "7" && dob[1] === "/" && dob[4] === "/") {
//             dobreturn = `July ${dob.substring(2,4)}, ${dob.substring(dob.length-4,dob.length)}`
//         //----------
//         } else if (dob[0] === "8" && dob[1] === "/" && dob[3] === "/") {
//             dobreturn = `August ${dob.substring(2,3)}, ${dob.substring(dob.length-4,dob.length)}`
//         } else if (dob[0] === "8" && dob[1] === "/" && dob[4] === "/") {
//             dobreturn = `August ${dob.substring(2,4)}, ${dob.substring(dob.length-4,dob.length)}`
//            //----------
//         } else if (dob[0] === "9" && dob[1] === "/" && dob[3] === "/") {
//             dobreturn = `September ${dob.substring(2,3)}, ${dob.substring(dob.length-4,dob.length)}`
//         } else if (dob[0] === "9" && dob[1] === "/" && dob[4] === "/") {
//             dobreturn = `September ${dob.substring(2,4)}, ${dob.substring(dob.length-4,dob.length)}`
//            //----------
//            //10 is diff 
//         } else if (dob[0] === "1" && dob[1] === "0" && dob[2] === "/" && dob[4] === "/") {//  10/1/1997
//             dobreturn = `October ${dob.substring(3,4)}, ${dob.substring(dob.length-4,dob.length)}`
//         } else if (dob[0] === "1" && dob[1] === "0" && dob[2] === "/" && dob[5] === "/") {// 10/11/1998
//             dobreturn = `October ${dob.substring(3,5)}, ${dob.substring(dob.length-4,dob.length)}`
//             //----------
//         } else if (dob[0] === "1" && dob[1] === "1" && dob[2] === "/" && dob[4] === "/") {//  10/1/1997
//             dobreturn = `November ${dob.substring(3,4)}, ${dob.substring(dob.length-4,dob.length)}`
//         } else if (dob[0] === "1" && dob[1] === "1" && dob[2] === "/" && dob[5] === "/") {// 10/11/1998
//             dobreturn = `November ${dob.substring(3,5)}, ${dob.substring(dob.length-4,dob.length)}`
//             //----------
//         }  else if (dob[0] === "1" && dob[1] === "2" && dob[2] === "/" && dob[4] === "/") {//  10/1/1997
//             dobreturn = `December ${dob.substring(3,4)}, ${dob.substring(dob.length-4,dob.length)}`
//         } else if (dob[0] === "1" && dob[1] === "2" && dob[2] === "/" && dob[5] === "/") {// 10/11/1998
//             dobreturn = `December ${dob.substring(3,5)}, ${dob.substring(dob.length-4,dob.length)}`
//         //----------
//     }




//     }

   // console.log(dob); 
return (
    //need to make it into another conpoent - where it shows the 4 things - then this coponment bring it out base on HOW MANY STUDENT. 
    <>
    <img src = {profilePhoto}/>
    <p><strong>{names.preferredName} {names.middleName[0]}. {names.surname}</strong></p>
    <p>{username}</p>
    <p>Birthday: {dobreturn}</p>
    {/* <li>Birthday:{dob}</li> */}
    </>
//maybe MAKE A FUNCTION THAT DOES THE BIRTHDAY CALUCATION. INTO STRING. 
)
}

export default StudentInfoCard;