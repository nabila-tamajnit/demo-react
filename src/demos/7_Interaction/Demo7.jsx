import { useState } from 'react'
import style from './Demo7.module.css'
import { Demo7Child } from './Demo7Child'

export const Demo7 = () => {

    const [children, setChildren] = useState([
        {
            id: 1,
            name: 'Timéon',
            skin: '👩🏻',
            adopted: false
        },
        {
            id: 2,
            name: 'Cunégonde',
            skin: '👧🏻',
            adopted: false
        },
        {
            id: 3,
            name: 'Constantin',
            skin: '👶🏻',
            adopted: false
        }
    ]);

    const changeAdoptionStatus = (id) => {

            const newChildren = children.map(child => {
                if (child.id === id) {
                    child.adopted = true;
                    return child;
                }
                else {
                    return child;
                }
            });
            setChildren(newChildren);

    }

    return (
        <div className={style.parent} >
            <h2>👨 : Je suis JeanMi, le parent</h2>

            <p>Voici la liste de mes enfants :</p>
            {
                //?COM
                //?COM
                children.map(child => <Demo7Child key={child.id} child={child} onAdoptReveal={changeAdoptionStatus} />)
            }
        </div>
    )
}