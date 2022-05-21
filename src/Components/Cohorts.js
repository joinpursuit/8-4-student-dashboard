const Cohorts = ({data, setList}) => {
    let cohorts = data.map(person => person.cohort.cohortCode);
    let noDups = [...new Set(cohorts)];

    return noDups.map(code => {
        let text = '';
        let numbers = '';
    
        for(let i = 0; i < code.length; i++){
            if(!isNaN(code[i]) * 1){
                numbers += code[i];
            }else{
                text += code[i];
            }
        }

        return (
            <div className="cohort">
                <li>
                   <button value={code}>{text} {numbers}</button>
                </li>
                <section className="line"></section>
            </div>
        )

    })

}

export default Cohorts;
