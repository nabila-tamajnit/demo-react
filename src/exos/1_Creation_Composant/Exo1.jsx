import style from './Exo1.module.css';

export const Exo1 = (props) => {

    const { name, age = 18 } = props;

    return (
        <>
        <p className={style.gros}>Bienvenue {name} sur l'application React !</p>
        <p className={style.petit}>Vous avez {age} ans !</p>
        </>
    );
}