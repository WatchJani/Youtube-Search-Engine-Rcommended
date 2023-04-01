import axios from "axios"
import { useState } from "react";

export const App = () => {
    const [res, setRes] = useState([])
    
    const handleChange = (event) => {
        if ( event.target.value.length >= 2){
            axios.post('http://localhost:8080/string',  event.target.value )
            .then(response => {
              if (response.data != null){
                  setRes(response.data);
              }else{
                  setRes([])
              }
            })
            .catch(error => {
              console.log(error);
            });
        }else{
            setRes([])
        }
    };
  
      return (
        <div className="App">
          <input type="search" name="" id="" onChange={handleChange}/>
  
        {res.map((value, index)=>{
          return(
            <p key={index}>{value}</p>
          )
        })}
  
        </div>
      );
}