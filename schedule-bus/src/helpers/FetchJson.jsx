//Fetch the projects.json file in data and get all the information
//and display it in the page.
import React from "react";
import {salidasSemana } from "../data/tirol"

export const FetchJson = (salidasSemana) => {
  return (
    <>
        {salidasSemana.map((data, key)=>{
            return(
                <div key={key} className="hora">
                    {console.log(data)}
                    {data.hora}
                </div>
                
            )
        })}
    
    </>)
};