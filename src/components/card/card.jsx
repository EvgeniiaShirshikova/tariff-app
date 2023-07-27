import st from "./style.module.scss"

export default function Card() {
    return (
        <div className={st.container}>
            <div className={st.name}>name</div>
            <div className={st.price}>price</div>
            <div className={st.volume}>volume</div>
            <div className={st.description}>description</div>
        </div>
    )
}