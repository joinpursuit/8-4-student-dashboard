import React, { useState } from "react";
import CohortSingle from "./CohortSingle";

const CohortList = ({datas,names,username,dob,profilePhoto, dobreturn, cohort,uniStudentCohort, setuniStudentCohort }) => { 
//should set up the array - of uniCohort. 

let arr = [];
let newarr = [];

const loopCohortUniList = () => {

for (let i = 0; i< datas.length; i++){
    if (arr.includes(datas[i].cohort.cohortCode) === false )
    arr.push(datas[i].cohort.cohortCode);
}


//console.log(arr)
}


return (
<div>
<h2>Choose a Class by Start Date</h2>

<ul>
<li>All students</li>    

{loopCohortUniList()}

{
//HOW TO SORT IT?
   arr.map((cohortCode) => {
    // for (let i = 0; i < arr.length; i++){
    
        if (cohortCode.substring(0,cohortCode.length-4) === "Spring" && cohortCode.substring(cohortCode.length-4) === "2025" ) {
            //cohortCode.substring(0,cohortCode.length-4) === "Spring" && cohortCode.substring(cohortCode.length-4) === "2025" 
            newarr[0]= (`${cohortCode.substring(0,cohortCode.length-4)} ${cohortCode.substring(cohortCode.length-4)}`);
            // return (<li>{`${cohortCode.substring(0,cohortCode.length-4)} ${cohortCode.substring(cohortCode.length-4)}`}</li>)
        } 
        else if (cohortCode.substring(0,cohortCode.length-4) === "Summer" && cohortCode.substring(cohortCode.length-4) === "2025" ) {
            newarr[1] = (`${cohortCode.substring(0,cohortCode.length-4)} ${cohortCode.substring(cohortCode.length-4)}`);
            // return (<li>{`${cohortCode.substring(0,cohortCode.length-4)} ${cohortCode.substring(cohortCode.length-4)}`}</li>)
        } 
        else  if (cohortCode.substring(0,cohortCode.length-4) === "Fall" && cohortCode.substring(cohortCode.length-4) === "2025" ) {
            newarr[2] = (`${cohortCode.substring(0,cohortCode.length-4)} ${cohortCode.substring(cohortCode.length-4)}`);
            // return (<li>{`${cohortCode.substring(0,cohortCode.length-4)} ${cohortCode.substring(cohortCode.length-4)}`}</li>)
        } 
        else  if (cohortCode.substring(0,cohortCode.length-4) === "Winter" && cohortCode.substring(cohortCode.length-4) === "2025" ) {
            newarr[3] = (`${cohortCode.substring(0,cohortCode.length-4)} ${cohortCode.substring(cohortCode.length-4)}`);
            // return (<li>{`${cohortCode.substring(0,cohortCode.length-4)} ${cohortCode.substring(cohortCode.length-4)}`}</li>)
        } 
          if (cohortCode.substring(0,cohortCode.length-4) === "Spring" && cohortCode.substring(cohortCode.length-4) === "2026" ) {
            newarr[4] = (`${cohortCode.substring(0,cohortCode.length-4)} ${cohortCode.substring(cohortCode.length-4)}`)
            // return (<li>{`${cohortCode.substring(0,cohortCode.length-4)} ${cohortCode.substring(cohortCode.length-4)}`}</li>)
        } 
        else  if (cohortCode.substring(0,cohortCode.length-4) === "Summer" && cohortCode.substring(cohortCode.length-4) === "2026" ) {
            newarr[5] =  (`${cohortCode.substring(0,cohortCode.length-4)} ${cohortCode.substring(cohortCode.length-4)}`)
        }
        else  if (cohortCode.substring(0,cohortCode.length-4) === "Fall" && cohortCode.substring(cohortCode.length-4) === "2026" ) {
            newarr[6] =  (`${cohortCode.substring(0,cohortCode.length-4)} ${cohortCode.substring(cohortCode.length-4)}`)
        }
        else  if (cohortCode.substring(0,cohortCode.length-4) === "Winter" && cohortCode.substring(cohortCode.length-4) === "2026" ) {
            newarr[7] =  (`${cohortCode.substring(0,cohortCode.length-4)} ${cohortCode.substring(cohortCode.length-4)}`)
        }
            // return (<li>{`${cohortCode.substring(0,cohortCode.length-4)} ${cohortCode.substring(cohortCode.length-4)}`}</li>)
        








    // }

   //cohortCode

    //     //console.log(cohort.cohortCode)
    //     // <CohortSingle cohortUniList={cohortUniList}/>
        
    //    )
    //console.log(newarr)
   })

}

{
//newarr loops with the right order?
//  {console.log(newarr[0])}
  newarr.map((cohortCode) => {
return (
    <li>{(cohortCode)}</li>

)
  


  })


}



    
</ul> 

</div>


)

}

export default CohortList;