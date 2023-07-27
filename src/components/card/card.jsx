import st from "./style.module.scss"

export default function Card(props) {
    const {name,price,speed,description,name_bgcolor,price_bgcolor} = props
    return (
        <div className={st.card}>
            <div className={`${st.name} ${st[name_bgcolor]}`}>{name}</div>
            <div className={`${st.price} ${st[price_bgcolor]}`}>{price}</div>
            <div className={st.speed}>{speed}</div>
            <div className={st.description}>{description}</div>
        </div>
    )
}