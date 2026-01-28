import { useState } from "react"


export const Demo6 = () => {

    //? ==================== CREATION useState() ===================
    // Pour gérer les formulaires nativement en React avec le state, nous avons 2 options : 
    // 👉🏻 Un state pour chaque donnée du formulaire
    // 🗒️ Pour pouvoir relier un state avec un champs, on devra rajouter 2 choses sur le champs
    //      * l'attribut value pour lier le champs à notre state value={nomState}
    //      * l'évènement onChange du champs qui doit modifier votre state à chaque fois qu'il est déclenché
    //      *   onChange={ (event) => setNomState(event.target.value)

    const [bill, setbill] = useState(0);
    const [nbPerson, setNbPerson] = useState(0);
    const [tips, setTips] = useState(5);
    const [isValid, setIsValid] = useState(true); /* Booléen qu'on va modifier pour afficher un message d'erreur ou non si notre formulaire est valide (ou pas) */

    const [totalPerPerson, setTotalPerPerson] = useState();

    //! 👉🏻 Un state de type objet qui représente tout le formulaire (voir Demo6Bis)

    //? ====================== FUNCTION handleSubmit() =======================
    // ✅ Gestion du submit
    const handleSubmit = (event) => {
        //event contiendra l'event qui vient d'être déclenché, c'est à dire, notre submit
        event.preventDefault(); /* empêche le comportement par défaut du submit qui recharge la page */
        setTotalPerPerson(undefined); /* Pour remettre le total à 0 quand on clique sur submit */

        if (bill > 0 && nbPerson > 0) {
            setTotalPerPerson((bill + (bill * tips / 100)) / nbPerson );
            setIsValid(true);
        }
        else {
            setIsValid(false);

        }
    }

    //* 👇====================== RETURN HTML ==========================👇
    return (

        <div>
            <h2>Split'O Resto</h2>

            <form onSubmit={handleSubmit} >

                <div>
                    <label htmlFor="bill">Total de la note :</label>
                    <input id="bill" type="number" value={bill} onChange={(event) => setbill(event.target.valueAsNumber)} />
                </div>

                <div>
                    <label htmlFor="nbPerson">Nombre de personnes :</label>
                    <input id="nbPerson" type="number" value={nbPerson} onChange={(event) => setNbPerson(event.target.valueAsNumber)} />
                </div>

                <div>
                    <label htmlFor="tips">Pourboire :</label>
                    <select id="tips" value={tips} onChange={(event) => setTips(event.target.value)} >
                        <option value={0}>Aucun</option>
                        <option value={5}>5%</option>
                        <option value={10}>10%</option>
                        <option value={15}>15%</option>
                    </select>
                </div>

                <button>Spliter 💸</button>
                {
                    !isValid && <span>⚠️ Vous devrez mettre une note et un nombre de personnes positif</span>
                }
            </form>

            {totalPerPerson &&
                <div>Vous devrez chacun-e payer : {totalPerPerson.toFixed(2)} € </div>
            }
        </div>
    )
}