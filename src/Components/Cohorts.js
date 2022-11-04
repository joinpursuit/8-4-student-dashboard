const Cohorts = ({data, setList, setTitle}) => {
    let noDups = [...new Set(data.map(person => person.cohort.cohortCode))];

    const formatCode = (code) =>{
        let text = '';
        let numbers = '';
        
        for(let i = 0; i < code.length; i++){
            if(!isNaN(code[i]) * 1){
                numbers += code[i];
            }else{
                text += code[i];
            }
        }
        return text + ' ' + numbers;
    }

   
    const handleClick = (e) => {
        const {value} = e.target;
        let newList = data.filter(student => {
            return student.cohort.cohortCode === value;
        })

        setList(newList);
        setTitle(formatCode(value));
    }

    return noDups.map(code => {
        return (
            <div>
                <li>
                   <button value={code} onClick={handleClick}>{formatCode(code)}</button>
                </li>
                <section className="line"></section>
            </div>
        )
    })
}

export default Cohorts;

