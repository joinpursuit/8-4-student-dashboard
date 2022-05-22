// import React from "react";
import StudentInfoCard from "./StudentInfoCard";
import React, { useState } from "react";
const StudentsList = ({
  datas,
  setTotalAmountOfStudents,
  totalAmountOfStudents,
  filterCohort
}) => {
    const [showText, setShowText] = useState(false);

    let count = 0;
  return (
    <div>
      <h2>{filterCohort}</h2>
      <p>Total Studetns: {totalAmountOfStudents}</p>
      {/* how to get the number of student? */}

      {
      datas.map(({ names, username, dob, profilePhoto, cohort, certifications,codewars,notes }) => {
       let onTrackToGraduate = "Not On Track to Graduate."

        let dobreturn = "";

       if (`${cohort.cohortCode.substring(0,cohort.cohortCode.length-4)} ${cohort.cohortCode.substring(cohort.cohortCode.length-4)}` === filterCohort) {//if these matches - print only these that match. 
        count++;
        //console.log(count);
        setTotalAmountOfStudents(count);
        // console.log("apple");


        if (certifications.resume === true && certifications.linkedin === true && certifications.github === true && certifications.mockInterview === true && codewars.current.total > 600 ) {
            onTrackToGraduate = "On Track to Graduate."
        }

        // console.log(filterCohort)
        for (let i = 0; i < dob.length; i++) {
          //setTotalAmountOfStudents(Number(totalAmountOfStudents+1));
            if (cohort.cohortCode === filterCohort && dob[0] === "1" && dob[1] === "/" && dob[3] === "/") {
              //1/2/1997
              //if first is 1 - and second is / meaning its jan - && if dob[3] is / meaning its single day.
              dobreturn = `January ${dob.substring(2, 3)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (dob[0] === "1" && dob[1] === "/" && dob[4] === "/") {
              //1/23/1994
              //dob[4] if its / meaing its a double date. so push the return 2 spot for 2 digit.
              dobreturn = `January ${dob.substring(2, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //-----------
            } else if (dob[0] === "2" && dob[1] === "/" && dob[3] === "/") {
              dobreturn = `February ${dob.substring(2, 3)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (dob[0] === "2" && dob[1] === "/" && dob[4] === "/") {
              dobreturn = `February ${dob.substring(2, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //-----------
            } else if (dob[0] === "3" && dob[1] === "/" && dob[3] === "/") {
              dobreturn = `March ${dob.substring(2, 3)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (dob[0] === "3" && dob[1] === "/" && dob[4] === "/") {
              dobreturn = `March ${dob.substring(2, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //-----------
            } else if (dob[0] === "4" && dob[1] === "/" && dob[3] === "/") {
              dobreturn = `April ${dob.substring(2, 3)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (dob[0] === "4" && dob[1] === "/" && dob[4] === "/") {
              dobreturn = `April ${dob.substring(2, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //---------
            } else if (dob[0] === "5" && dob[1] === "/" && dob[3] === "/") {
              dobreturn = `May ${dob.substring(2, 3)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (dob[0] === "5" && dob[1] === "/" && dob[4] === "/") {
              dobreturn = `May ${dob.substring(2, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //-----------
            } else if (dob[0] === "6" && dob[1] === "/" && dob[3] === "/") {
              dobreturn = `June ${dob.substring(2, 3)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (dob[0] === "6" && dob[1] === "/" && dob[4] === "/") {
              dobreturn = `June ${dob.substring(2, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //-------
            } else if (dob[0] === "7" && dob[1] === "/" && dob[3] === "/") {
              dobreturn = `July ${dob.substring(2, 3)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (dob[0] === "7" && dob[1] === "/" && dob[4] === "/") {
              dobreturn = `July ${dob.substring(2, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //----------
            } else if (dob[0] === "8" && dob[1] === "/" && dob[3] === "/") {
              dobreturn = `August ${dob.substring(2, 3)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (dob[0] === "8" && dob[1] === "/" && dob[4] === "/") {
              dobreturn = `August ${dob.substring(2, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //----------
            } else if (dob[0] === "9" && dob[1] === "/" && dob[3] === "/") {
              dobreturn = `September ${dob.substring(2, 3)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (dob[0] === "9" && dob[1] === "/" && dob[4] === "/") {
              dobreturn = `September ${dob.substring(2, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //----------
              //10 is diff
            } else if (
              dob[0] === "1" &&
              dob[1] === "0" &&
              dob[2] === "/" &&
              dob[4] === "/"
            ) {
              //  10/1/1997
              dobreturn = `October ${dob.substring(3, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (
              dob[0] === "1" &&
              dob[1] === "0" &&
              dob[2] === "/" &&
              dob[5] === "/"
            ) {
              // 10/11/1998
              dobreturn = `October ${dob.substring(3, 5)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //----------
            } else if (
              dob[0] === "1" &&
              dob[1] === "1" &&
              dob[2] === "/" &&
              dob[4] === "/"
            ) {
              //  10/1/1997
              dobreturn = `November ${dob.substring(3, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (
              dob[0] === "1" &&
              dob[1] === "1" &&
              dob[2] === "/" &&
              dob[5] === "/"
            ) {
              // 10/11/1998
              dobreturn = `November ${dob.substring(3, 5)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //----------
            } else if (
              dob[0] === "1" &&
              dob[1] === "2" &&
              dob[2] === "/" &&
              dob[4] === "/"
            ) {
              //  10/1/1997
              dobreturn = `December ${dob.substring(3, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (
              dob[0] === "1" &&
              dob[1] === "2" &&
              dob[2] === "/" &&
              dob[5] === "/"
            ) {
              // 10/11/1998
              dobreturn = `December ${dob.substring(3, 5)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //----------
            }
          }
       

          return (
            <li>
              {" "}
              <StudentInfoCard names={names} profilePhoto={profilePhoto} username={username} dobreturn={dobreturn} cohort={cohort} filterCohort={filterCohort} onTrackToGraduate={onTrackToGraduate} codewars={codewars} showText={showText}
      setShowText={setShowText} certifications={certifications} notes={notes}/>
              {/* {cohort.cohortCode} */}
            </li>
            
            //with the values I need
          );
  
    
    
    } 

    else if  (filterCohort  === "All students") {
        count = 250;
        setTotalAmountOfStudents(count);


        if (certifications.resume === true && certifications.linkedin === true && certifications.github === true && certifications.mockInterview === true && codewars.current.total > 600 ) {
            onTrackToGraduate = "On Track to Graduate."
        }


        for (let i = 0; i < dob.length; i++) {
            if (cohort.cohortCode === filterCohort && dob[0] === "1" && dob[1] === "/" && dob[3] === "/") {
              //1/2/1997
              //if first is 1 - and second is / meaning its jan - && if dob[3] is / meaning its single day.
              dobreturn = `January ${dob.substring(2, 3)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (dob[0] === "1" && dob[1] === "/" && dob[4] === "/") {
              //1/23/1994
              //dob[4] if its / meaing its a double date. so push the return 2 spot for 2 digit.
              dobreturn = `January ${dob.substring(2, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //-----------
            } else if (dob[0] === "2" && dob[1] === "/" && dob[3] === "/") {
              dobreturn = `February ${dob.substring(2, 3)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (dob[0] === "2" && dob[1] === "/" && dob[4] === "/") {
              dobreturn = `February ${dob.substring(2, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //-----------
            } else if (dob[0] === "3" && dob[1] === "/" && dob[3] === "/") {
              dobreturn = `March ${dob.substring(2, 3)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (dob[0] === "3" && dob[1] === "/" && dob[4] === "/") {
              dobreturn = `March ${dob.substring(2, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //-----------
            } else if (dob[0] === "4" && dob[1] === "/" && dob[3] === "/") {
              dobreturn = `April ${dob.substring(2, 3)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (dob[0] === "4" && dob[1] === "/" && dob[4] === "/") {
              dobreturn = `April ${dob.substring(2, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //---------
            } else if (dob[0] === "5" && dob[1] === "/" && dob[3] === "/") {
              dobreturn = `May ${dob.substring(2, 3)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (dob[0] === "5" && dob[1] === "/" && dob[4] === "/") {
              dobreturn = `May ${dob.substring(2, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //-----------
            } else if (dob[0] === "6" && dob[1] === "/" && dob[3] === "/") {
              dobreturn = `June ${dob.substring(2, 3)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (dob[0] === "6" && dob[1] === "/" && dob[4] === "/") {
              dobreturn = `June ${dob.substring(2, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //-------
            } else if (dob[0] === "7" && dob[1] === "/" && dob[3] === "/") {
              dobreturn = `July ${dob.substring(2, 3)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (dob[0] === "7" && dob[1] === "/" && dob[4] === "/") {
              dobreturn = `July ${dob.substring(2, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //----------
            } else if (dob[0] === "8" && dob[1] === "/" && dob[3] === "/") {
              dobreturn = `August ${dob.substring(2, 3)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (dob[0] === "8" && dob[1] === "/" && dob[4] === "/") {
              dobreturn = `August ${dob.substring(2, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //----------
            } else if (dob[0] === "9" && dob[1] === "/" && dob[3] === "/") {
              dobreturn = `September ${dob.substring(2, 3)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (dob[0] === "9" && dob[1] === "/" && dob[4] === "/") {
              dobreturn = `September ${dob.substring(2, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //----------
              //10 is diff
            } else if (
              dob[0] === "1" &&
              dob[1] === "0" &&
              dob[2] === "/" &&
              dob[4] === "/"
            ) {
              //  10/1/1997
              dobreturn = `October ${dob.substring(3, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (
              dob[0] === "1" &&
              dob[1] === "0" &&
              dob[2] === "/" &&
              dob[5] === "/"
            ) {
              // 10/11/1998
              dobreturn = `October ${dob.substring(3, 5)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //----------
            } else if (
              dob[0] === "1" &&
              dob[1] === "1" &&
              dob[2] === "/" &&
              dob[4] === "/"
            ) {
              //  10/1/1997
              dobreturn = `November ${dob.substring(3, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (
              dob[0] === "1" &&
              dob[1] === "1" &&
              dob[2] === "/" &&
              dob[5] === "/"
            ) {
              // 10/11/1998
              dobreturn = `November ${dob.substring(3, 5)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //----------
            } else if (
              dob[0] === "1" &&
              dob[1] === "2" &&
              dob[2] === "/" &&
              dob[4] === "/"
            ) {
              //  10/1/1997
              dobreturn = `December ${dob.substring(3, 4)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
            } else if (
              dob[0] === "1" &&
              dob[1] === "2" &&
              dob[2] === "/" &&
              dob[5] === "/"
            ) {
              // 10/11/1998
              dobreturn = `December ${dob.substring(3, 5)}, ${dob.substring(
                dob.length - 4,
                dob.length
              )}`;
              //----------
            }
          }
       

          return (
            <li>
              {" "}
              <StudentInfoCard names={names} profilePhoto={profilePhoto} username={username} dobreturn={dobreturn} cohort={cohort} filterCohort={filterCohort} onTrackToGraduate={onTrackToGraduate} codewars={codewars} showText={showText} setShowText={setShowText} certifications={certifications} notes={notes}/>
              {/* showText={showText} setShowText={setShowText} */}
              {/* {cohort.cohortCode} */}
            </li>
            
            //with the values I need
          );
  
        


    }

       

      })
      
      }
    </div>
  );
};
//names,username,dob,profilePhoto

// <img src = {profilePhoto}/>
// <p><strong>{names.preferredName} {names.middleName[0]}. {names.surname}</strong></p>
// <p>{username}</p>
// <p>Birthday: {dobreturn}</p>

export default StudentsList;
