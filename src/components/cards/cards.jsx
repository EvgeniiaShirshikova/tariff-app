import React from "react";
import Card from "../card/card";
import st from "./style.module.scss"

export default function Cards() {
    return (
        <div className={st.container}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
    )
}