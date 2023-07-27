import st from "./style.module.scss"

export default function Card(props) {
    const {name,price,speed,description} = props
    return (
        <div className={st.container}>
            <div className={st.name}>{name}</div>
            <div className={st.price}>{price}</div>
            <div className={st.speed}>{speed}</div>
            <div className={st.description}>{description}</div>
        </div>
    )
}