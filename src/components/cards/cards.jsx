import React from "react";
import Card from "../card/card";
import st from "./style.module.scss"
import tariffs from "../../data/tariffs.json"

export default function Cards() {
    return (
        <div className={st.container}>
        {tariffs.map((item,index)=>(
            <Card key={index} name={item.name} price={item.price} speed={item.speed} description={item.description} name_bgcolor={item.name_bgcolor} price_bgcolor={item.price_bgcolor}/>
        ))}
        </div>
    )
}