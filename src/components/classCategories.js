const ClassCategories = (prop) => {
    const { uniqueCohorts, setTerm } = prop;
    
    const sortStudents = (el) => {
        setTerm(el.target.id);
    }

    const allStudents = (el) => {
        setTerm("");
    }
    
    return (
        <>
            <h2>Choose a Class by Start Date</h2>
            <ul key='all' id="all" onClick={allStudents}>All Students</ul>
            {uniqueCohorts.map(el => {
                const id = el.split(" ").join("");
                return(
                    <ul 
                    key={id}
                    id={id}
                    name={el}
                    onClick={sortStudents}>
                    {el}
                    </ul>
                )
            })}
        </>
    )
}

export default ClassCategories;