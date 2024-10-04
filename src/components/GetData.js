import { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetData(){
    const [data, setData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        try{
            axios.get('https://64ba36b55e0670a501d5d09f.mockapi.io/employee').then((res)=>{
                setData(res)
            })
            setTimeout(()=>{
                setIsLoaded(true)
            },500)
           
        }catch(error){
            console.error(error.message)
        }

            
    },[])
    // console.log("api response ----->")
    // console.log(data);
    return(
        <div>
            <h1>Employee Details</h1>
            {   isLoaded === false? <div><h4> Loading Data ... please wait</h4></div> :
                data?.data?.map((data, index)=>{
                    return(
                        <div className="empDetails"  data-testid={`employee${index}`}>
                        <div className="empName"><b>Name :</b> {data.name}</div>
                        <div className="empAge"><b>Age :</b> {data.age}</div>
                        <div className="empState"><b>State :</b> {data.state}</div>
                        </div>
                    )
                })
            }
        </div>
        
    )
}