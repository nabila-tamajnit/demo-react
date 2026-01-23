import style from './Demo2.module.css'

export const Demo2 = (props) => {

    const { owner, havePet, name, image, type } = props;

    // ! 1er type de conditionnel

    if (!havePet) {
        return (
            <>
            <div className={style.nopet} >
                <p>Oh non {owner} ! Vous ne possédez pas d'animal ? 😥 </p>
                <a target='__blank' href="https://www.veeweyde.be">Cliquez-ici pour en adopter un !</a>
            </div>
            </>
        );
    }

    return (
        <>
        <div className={style.pet} >
            <p>Ohlala {owner} ! Dis-m'en plus sur ton animal 👀 </p>
        </div>
        </>
    )
}