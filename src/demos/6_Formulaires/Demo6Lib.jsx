import { useState } from "react"
import { useForm } from "react-hook-form";

// Gestion formulaire avec librairie
// 🗒️ Celle que nous allons utiliser est React-Hook-Form 
//      https://react-hook-form.com/

// Pour l'installer dans le projet : dans la console, tapez npm i react-hook-form
export const Demo6Lib = () => {

    //? =============== CREATION useState() & useForm() ===============
    const [totalPerPerson, setTotalPerPerson] = useState();

    // 🗒️ Nous avons maintenant accès une nouvelle Hook qui s'appele useForm et dans laquelle, on va extraire plusieurs choses
    // 👉 register -> c'est ce qui va nous permettre "d'enregistrer un nouveau champ" (il fait le value={state} + onChange={fonctionPourChangerLeState} pour nous, en gros 😁)
    // 👉 handleSubmit -> C'est une fonction qui fait le preventDefault et qui renvoie le state qu'elle a fabriqué. Elle prend deux fonction exécutées en cas de formulaire vide, la deuxieme est la fonction éxécutée en cas de formulaire non valide
    // 👉 formState -> l'état du formulaire
    //        * De formState, on va récupérer errors qui contient toutes les erruers actuelles du formulaire
    const { register, handleSubmit, formState: { errors }, reset } = useForm( { mode: 'onChange', defaultValues: { bill: 0, nbPerson: 0, tips: 5 } } );

    //? =================== FUNCTION splitBill() ======================
    const splitBill = (data) => {
        // data contient les données de notre formulaire auto-générées par notre useForm grâce à register
        console.log(data);

        setTotalPerPerson((data.bill + (data.bill * data.tips / 100)) / data.nbPerson)

    }

    //* 👇====================== RETURN HTML ==========================👇
    return (

        <div>
            <h2>Split'O Resto</h2>

            <form onSubmit={handleSubmit(splitBill, () => setTotalPerPerson(undefined))} >

                <div>
                    <label htmlFor="bill">Total de la note :</label>
                    <input id="bill" name="bill" type="number"
                        {...register('bill', { valueAsNumber: true, required: true, min: 10 })} />

                    {
                        errors['bill']?.type === 'required' &&
                        <span>Ce champs est requis</span>
                    }
                    {
                        errors['bill']?.type === 'min' &&
                        <span>Vous devez mettre une valeur minimum de 10€</span>
                    }
                </div>

                <div>
                    <label htmlFor="nbPerson">Nombre de personnes :</label>
                    <input id="nbPerson" name="nbPerson" type="number"
                        {...register('nbPerson', { valueAsNumber: true, required: true, min: 1 })} />

                    {
                        errors['nbPerson']?.type === 'required' &&
                        <span>Ce champs est requis</span>
                    }
                    {
                        errors['nbPerson']?.type === 'min' &&
                        <span>Vous devez être au moins 1 personne</span>
                    }
                </div>

                <div>
                    <label htmlFor="tips">Pourboire :</label>
                    <select id="tips" name="tips"
                        {...register('tips', { valueAsNumber: true, required: true })} >

                        <option value={0}>Aucun</option>
                        <option value={5}>5%</option>
                        <option value={10}>10%</option>
                        <option value={15}>15%</option>
                    </select>
                </div>

                <button>Spliter 💸</button>
            </form>

            {totalPerPerson &&
                <div>Vous devrez chacun-e payer : {totalPerPerson.toFixed(2)} € </div>
            }
        </div>
    )
}