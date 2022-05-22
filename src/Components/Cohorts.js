const Cohorts = ({data, setList, setTitle}) => {
    let noDups = [...new Set(data.map(person => person.cohort.cohortCode))];

    // const options = {month: 'long', year: 'numeric'}

    // let formattedCohorts = new Intl.DateTimeFormat('en-US', options).format('Fall2026')

    // console.log(formattedCohorts)
   
    const handleClick = (e) => {
        const {value} = e.target;
        let newList = data.filter(student => {
            return student.cohort.cohortCode === value;
        })

        setList(newList);
        setTitle(value);
    }

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
                   <button value={code} onClick={handleClick}>{text + ' ' + numbers}</button>
                </li>
                <section className="line"></section>
            </div>
        )
    })
}

export default Cohorts;

