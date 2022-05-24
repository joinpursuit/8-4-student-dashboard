import React, { useState } from "react";
import Student from "./Student"

const StudentList = () => {
    return (
        <div className="studentList">
            <h2>All Students</h2>
            <h3>Total Students: 250</h3>
            <Student />
        </div>
    )
}

export default StudentList