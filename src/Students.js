
import React , {useEffect, useState} from "react";
import StudentsCard from "./StudentsCard";
import data from './data/data.json';

const Students = () => {
    const [cohart, setCohart] = useState([])

    useEffect(() =>{
        {data.map((stu)=>{

                setCohart(cohart=>[...cohart,stu.cohort.cohortCode])
        

            }
            

        )}})

        useEffect(()=>{
            setCohart([...new Set(cohart)])
        })

        console.log(cohart)



    
    

    



    return (
        <div className="students">
            <span>
            <h1>All Students</h1>
            <p>Total students : {data.length}</p>
            </span>
            {data.map((person) => {return <StudentsCard stuData={person}></StudentsCard>})}
    
            
        </div>
    )

   
}










export default Students;