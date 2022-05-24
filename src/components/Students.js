import React from 'react';
import Student from './Student';

function Students({
    studentsData,
    setStudentsData,
    showMore,
    setShowMore,
    currentTitle,
    setCurrentTitle,
    linkName,
    setLinkName }) {





    return (
        <>
            <Student
                showMore={showMore}
                setShowMore={setShowMore}
                studentsData={studentsData}
                setStudentsData={setStudentsData}
                currentTitle={currentTitle}
                setCurrentTitle={setCurrentTitle}
                linkName={linkName}
                setLinkName={setLinkName}
            />
        </>
    )
}

export default Students