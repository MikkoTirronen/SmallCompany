function renderInput(type, value, setValue, placeholder, id) {
    return (
        <input
            type={type}
            value={value}
            id={id}
            onChange={e => setValue(e.target.value)}
            placeholder={placeholder}/>
    )
}
function updateData(setValue) {
    const url = "https://frebi.willandskill.eu/api/v1/customers"
    const token = localStorage.getItem("smallCompany")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
    
    fetch(url, {
        headers: headers
    })
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            setValue(data)
                
        })
}

function fetchData(getThisUrl, setValue) {
    const url = getThisUrl
    const token = localStorage.getItem("smallCompany")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
    
    fetch(url, {
        headers: headers
    })
        .then(res => res.json())
        .then(data => {  
                setValue(data)
                console.log(data)
    
        })
}
    export {renderInput, updateData, fetchData}