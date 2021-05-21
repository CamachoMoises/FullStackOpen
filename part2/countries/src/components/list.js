import React from "react"

const List=({countries})=>{
    if(countries.length===0 || countries.length>10){
        console.log(countries);
        return <div> Too many matches, specify another filter    </div>
    }
    if(countries.length===1)return(
        <>
            {countries.map((country)=>(
                <div key={country.alpha3Code}>
                    <h1> {country.name} </h1>
                    <div>capital {country.capital}</div>
                    <div>population {country.population}</div>
                    <h2> language </h2>
                    <ul>
                        {country.languages.map((language )=>(
                            <li key={language.iso639_2}> {language.name} </li>    
                        ))}
                    </ul>
                    <img  src={country.flag} height="130px" width="180px" alt="flag" />
                </div>
            ))}
        </>
    )
    

    return(
        <div>
            {countries.map((country) =>(
                <div key={country.alpha3Code}>{country.name}</div>
            ))}
        </div>
    )
}
export default List