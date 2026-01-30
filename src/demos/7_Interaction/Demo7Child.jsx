import style from './Demo7.module.css'

export const Demo7Child = (props) => {

    const { child, onAdoptReveal } = props;
    // ?COM
    // ?COM
    const { id, name, skin, adopted } = child

    return (
        <div className={style.enfant} >
            <h3>{skin} : Je suis {name} !</h3>
            {adopted ?

                <span>Je suis adopté</span> :

                // ?COM
                <button onClick={ () => { onAdoptReveal(id) } } >Annoncer que je suis adopté</button>
            }

        </div>
    )
}