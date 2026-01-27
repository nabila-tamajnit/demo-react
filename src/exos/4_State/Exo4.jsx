import { useState } from "react";

export const Exo4 = () => {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Burger Cheese',
            price: 8.50,
            quantity: 0
        },
        {
            id: 2,
            name: 'Burger Chicken',
            price: 11,
            quantity: 0
        },
        {
            id: 3,
            name: 'Burger Triple',
            price: 12.50,
            quantity: 0
        },
        {
            id: 4,
            name: 'Petite Frite',
            price: 3.50,
            quantity: 0
        },
        {
            id: 5,
            name: 'Moyenne Frite',
            price: 4.50,
            quantity: 0
        },
        {
            id: 6,
            name: 'Grande Frite',
            price: 6,
            quantity: 0
        },
    ]);

    const [total, setTotal] = useState(0);

    const crement = (id, value) => {

        const newProducts = products.map(product => {
            //pour chaque compteur, si l'id correspond
            if (product.id === id) {
                //on renvoie le compteur avec l'id non modifié mais le count modifié
                product.quantity += value;
                return product

            }
            //si l'id ne correspond pas, on renvoie le compteur tel quel (id + count inchangé)
            else {
                return product
            }
        })
        // on va modifier le tableau de produits
        setProducts(newProducts);



        //    let somme = 0; 
        //     products.forEach( product =>        
        //         somme += product.price * product.quantity
        //     )

        let somme = products.reduce( (somme, product) => somme + product.price * product.quantity, 0)

        setTotal(somme);

        //todo
        // pas ici mais créer un state pour le total 
        // Opt 1 :
        // récupérer le produit grâce à son id
        // modifier ton total avec le set pour qu'il soit égal à lui même - ou + le prix du produit trouvé juste au dessus
        // prix * value

        //Opt 2 : 
        //calculer la somme avec une boucle ou un reduce
    }

    return (
        <div>
            <h2>Gestion de panier :</h2>
            <div>
                {products.map(product => (
                    <div key={product.id} className="flex flex-row items-center gap-3" >

                        <p>{product.name}</p> <p>{product.price}</p>

                        <div className="flex flex-row justify-center items-center gap-3">
                            <button onClick={() => crement(product.id, -1)} >➖</button>
                            <p>{product.quantity}</p>
                            <button onClick={() => crement(product.id, 1)} >➕</button>
                        </div>

                    </div>))}
            </div>
            <div>
                Total : {total} €
            </div>
        </div>
    )
}