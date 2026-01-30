import { useState } from "react";


export const Calculator = () => {

    const [nbOne, setNbOne] = useState(0);
    const [operator, setoperator] = useState('+');
    const [nbTwo, setNbTwo] = useState(0);

    const [total, setTotal] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        setTotal(undefined);

        //todo : si un des number vide -> afficher erreur


        switch(operator) {
            case '+':
                setTotal(nbOne + nbTwo);

                break;

            case '-':
                setTotal(nbOne - nbTwo);

                break;
            
            case '*':
                setTotal(nbOne * nbTwo);

                break;
            
            case '/':
                //todo vérifier si nombre2 est 0 -> erreur
                setTotal(nbOne / nbTwo);


                break;
        }





    }

    return (
        <div>
            <h2>Calculatrice</h2>

            <div className="flex fles-row gap-1" >
                <form onSubmit={handleSubmit} className="flex flex-row gap-2">

                    <div className="flex flex-row" >
                        <label htmlFor="nbOne">Nb1 :</label>
                        <input type="number" name="nbOne" id="nbOne" value={nbOne} onChange={(event) => setNbOne(event.target.valueAsNumber)} />
                    </div>

                    <div>
                        <label htmlFor="operator">Opération :</label>
                        <select name="operator" id="operator" value={operator} onChange={(event) => setoperator(event.target.value)} >
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">X</option>
                            <option value="/">/</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="nbTwo">Nb2 :</label>
                        <input type="number" name="nbTwo" id="nbTwo" value={nbTwo} onChange={(event) => setNbTwo(event.target.valueAsNumber)} />
                    </div>


                    <button>Calculer</button>
                </form>

                {/* todo : remplacer div par input  */}
                <input type="text" value={total} readOnly/>

            </div>
        </div>
    )
}