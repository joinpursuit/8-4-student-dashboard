import Cohorts from "./Cohorts";

const CohortList = ({data, setList}) => {
    return (
        <div className="cohorts">
            <h3>Choose a Class by Start Date</h3>
            <ul>
                <li>
                    <button value='students' onClick={() => setList(data)}>All Students</button>
                </li>
                <section className="line"></section>
                <Cohorts data={data} setList={setList}/>
            </ul>
        </div>
    )
}

export default CohortList;