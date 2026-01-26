import style from './MovieCard.module.css';

const showStar = (notation) => {

    // const arrayNotation = new Array(5).fill('');
    
    return (
        <>
        {Array.from({length:5},(_, index) =>
             index < notation ?
             <span>⭐</span>  : 
             <span>☆</span> ) }

         {/* {arrayNotation.map((_, index)=> ( <span key=   { index}> { index < notation ? '⭐' : ' ☆'}  </span> ) ) } */}
        </>
    )
}

export const MovieCard = (props) => {

    const { movie } = props;

    const { id, title, director, year, poster, notation } = movie;

    return (
        <div className={style.card}>
            <div>
                <h3>{title}</h3>
            </div>
            <div className={ style.image } >
                <img src={poster} alt= {` Affiche du film ${title}`} />
            </div>
            <div className={ style.description } >
                <p>Réalisateur : {director}</p>
                <p>Année de sortie : {year}</p>
            </div>
            <div>
                { showStar(notation) }
            </div>

        </div>
    )
}