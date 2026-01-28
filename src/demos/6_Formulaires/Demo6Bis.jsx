import { useState } from "react"


export const Demo6Bis = () => {

    //? ==================== CREATION useState() ===================
    // 👉🏻 Un state de type objet qui représente tout le formulaire
    const [splitForm, setSplitForm] = useState({
        bill: 0,
        nbPerson: 0,
        tips: 5
    });

    const [isValid, setIsValid] = useState(true);
    const [totalPerPerson, setTotalPerPerson] = useState();

    //? =================== FUNCTION handleField() ======================
    const handleField = (event) => {
        // console.log(event);
        // Dans event, nous avons des informations sur le champs qui vient de déclencher l'évènement
        const name = event.target.name; /* le nom du champs */
        console.log(name);
        const type = event.target.type; /* le type du champs (number,text, password) */
        console.log(type);

        setSplitForm(prev => {

            const newSplitForm = {
                ...prev, //?com

                //?com
                [name]: (type === 'checkbox') ?
                    event.target.checked :
                    (type === 'number') ?
                        event.target.valueAsNumber :
                        event.target.value
                //?com
            }
            return newSplitForm;
            // ou return {...}
        })
    }

    //? ====================== FUNCTION handleSubmit() =======================
    const handleSubmit = (event) => {

        event.preventDefault(); /* empêche le comportement par défaut du submit qui recharge la page */

        setTotalPerPerson(undefined); /* Pour remettre le total à 0 quand on clique sur submit */

        if (splitForm.bill > 0 && splitForm.nbPerson > 0) {
            setTotalPerPerson((splitForm.bill + (splitForm.bill * splitForm.tips / 100)) / splitForm.nbPerson);
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
                    <input id="bill" name="bill" type="number" value={splitForm.bill} onChange={handleField} />
                </div>

                <div>
                    <label htmlFor="nbPerson">Nombre de personnes :</label>
                    <input id="nbPerson" name="nbPerson" type="number" value={splitForm.nbPerson} onChange={handleField} />
                </div>

                <div>
                    <label htmlFor="tips">Pourboire :</label>
                    <select id="tips" name="tips" value={splitForm.tips} onChange={handleField} >
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