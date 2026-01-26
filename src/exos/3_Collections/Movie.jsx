import { MovieCard } from "./MovieCard";
import style from './MovieCard.module.css'

export const Movie = () => {

    const movies = [
        {
            id : 1,
            title : 'Avatar',
            director : 'James Cameron',
            year : 2009,
            poster : 'https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/loisirs/cinema/dossiers/films-a-voir-une-fois/avatar-de-james-cameron/102879719-1-fre-FR/Avatar-de-James-Cameron.jpg',
            notation : 5
        },
        {
            id : 2,
            title : 'Harry Potter',
            director : 'Chris Columbus',
            year : '2001',
            poster : 'https://www.lestroisreliques.com/wp-content/uploads/affiche-film-harry-potter-1-boutique-les-3-reliques-bourg-en-bresse-768x1024-27971.jpg',
            notation : 4
        },
        {
            id : 3,
            title : 'Le Hobbit',
            director : 'Peter Jackson',
            year : 2012,
            poster : 'https://fr.web.img6.acsta.net/medias/nmedia/18/93/43/35/20273834.jpg',
            notation : 3
        },
        {
            id : 4,
            title : 'Jamais plus',
            director : 'Justin Baldoni',
            year : 2024,
            poster : 'https://fr.web.img6.acsta.net/img/b5/ff/b5ff0f64dfdf0354ca29c72b43fdb90d.jpg',
            notation : 1
        },
        {
            id : 5,
            title : 'La femme de ménage',
            director : 'Freida McFadden',
            year : 2025,
            poster : 'https://fr.web.img5.acsta.net/img/ed/a3/eda3bba832e22c79ea22117b058f84e5.jpg',
            notation : 3
        }
    ];

    return (
        <div >
            <h2>Liste de films</h2>

            <div className="flex flex-row justify-center items-center gap-3">
                { movies.map( movie => ( <MovieCard key={movie.id} movie={movie} /> ))}
            </div>
        </div>
    )
}